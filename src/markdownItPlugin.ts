import { debounce } from './utils/debounce';

let importedVariables: { [key: string]: string } = null;
//let noteVariables: { [note: string]: { vars: { [key: string]: string } } } = {};

/**
 * Plugin body
 */
export default (context: {contentScriptId: string, postMessage: any }) => { return { plugin: async (markdownIt, pluginOptions) => {

    // Save the default render rules
    const proxy = (tokens, idx, options, env, self) => self.renderToken(tokens, idx, options, env, self);
    const defaultTextRender = markdownIt.renderer.rules.text || proxy;
    const defaultInlineCodeRender = markdownIt.renderer.rules.code_inline || proxy;
    const defaultFenceRender = markdownIt.renderer.rules.fence || proxy;

    // Import variable notes
    markdownIt.renderer.rules.code_inline = function (tokens, idx, options, env, self) {
        const token = tokens[idx];

        // Matches `import xxx;y yy;`
        const importMatch = (token.content as string)?.match(/^import\s((?:[^;]+;?)+)$/);

        // No explicit import
        if (importMatch == null) return defaultInlineCodeRender(tokens, idx, options, env, self);

        // Load list of explicit imports
        const explicitImports = importMatch[1].trimStart().split(';');
        // Load list of implicit imports
        const implicitImports = fetchLocalStorage('ImplicitNoteVariablesIDs');
        const allImports = [...implicitImports].concat(explicitImports);
        // Load variables data from local storage
        const noteVariables = fetchLocalStorage('NoteVariables');
        const importResult = mergeImports(noteVariables, allImports);
        importedVariables = importResult.merged;

        // Output
        const coloredImports = allImports.map(value => {
            return `<span style="color:${importResult.validImports.includes(value) ? 'lightgreen' : 'lightcoral'}" > ${value}</span>`;
        }).join(';');
        const newText = '<code class="inline-code">import' + coloredImports + '</code>';

        return pluginOptions.settingValue('show-colored-imports') ? newText : "";
    };

    // Replace variables in text
    markdownIt.renderer.rules.text = function (tokens, idx, options, env, self) {
        const newText = replaceText(<string>tokens[idx].content, importedVariables);
        resetImportedVariables();
        return newText;
        // return replaceAndRender(defaultTextRender, tokens, idx, options, env, self);
    };

    // Replace variables in fence
    markdownIt.renderer.rules.fence = function (tokens, idx, options, env, self) {
        return replaceAndRender(defaultFenceRender, tokens, idx, options, env, self);
    };
}, }; }

/**
 * Replace variables and render with default rule
 * @returns Rendered tokens
 */
function replaceAndRender(defaultRender, tokens, idx, options, env, self){
    tokens[idx].content = replaceText(<string>tokens[idx].content, importedVariables);
    resetImportedVariables();
    return defaultRender(tokens, idx, options, env, self);
}

/**
 * Fetch the note variables from local storage.
 * @returns The Note Variables from local storage
 */
function fetchLocalStorage(query: string) {
    const jsonStrong = localStorage.getItem(query);
    return jsonStrong == null ? [] : JSON.parse(jsonStrong);
}

/**
 * Merges the Note Variables into a single object to use in the MD renderer
 * @param imports
 * @returns The merged variables and the valid imports
 */
function mergeImports(noteVariables, imports: string[]) {
    let result = { merged: {}, validImports: [] };

    // The reverse is to give the first imports variables more priority
    [...imports].reverse().forEach(importValue => {
        // Check if import is valid
        if (noteVariables[importValue] == null) return;

        // List import as valid
        result.validImports.push(importValue);

        // Push import variables into returned object
        result.merged = {...result.merged, ...noteVariables[importValue].vars, };
    });

    return result;
}

/**
 * Replaces all the provided variables in a string
 * @param text
 * @param variables
 * @returns The replaced text
 */
function replaceText(text: string, variables: { [key: string]: string }): string {
    if (text.length === 0) return text;
    if (variables == null) return text;
    if (Object.keys(variables).length === 0) return text;

    const variablesLeft = { ...variables };

    // For loop is made useless with the recursive call...
    for (const key of Object.keys(variables)) {
        delete variablesLeft[key];

        // Looking for text to replace
        const matchIndex = text.indexOf(key);
        if (matchIndex === -1) continue;

        // Recursive call to avoid accidental replacements (I guess?)
        const textSplit = text.split(key).map(splitText => {return replaceText(splitText, variablesLeft);});

        // Return text with replacement
        return textSplit.join(variables[key]);
    }

    // This line should not be reached
    return text;
}

/**
 * Resets the imported variables.
 */
const resetImportedVariables = debounce(() => {importedVariables = null;}, 500);

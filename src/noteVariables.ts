import joplin from 'api';
import { ContentScriptType, MenuItemLocation, SettingItemType } from 'api/types';
import { createVariablesNote } from './utils/createVariablesNote';
import { loadVariablesNotes } from './utils/loadVariablesNotes';

export namespace noteVariables {

  /**
   * Loads all the variables from the Notes into localStorage for the MD plugin
   * @param e
   */
  const onNoteChangeHandler = async (e: any) => {
    if (e.event !== 2) return;
    loadVariablesNotes();
  };

  /**
   * Register settings for MarkdownIt plugin
   */
  const showColoredImportsId = 'show-colored-imports';
  const registerSettings = async () => {
    const sectionName = 'mathieu-plugin';
    await joplin.settings.registerSection(sectionName, {
      label: "Mathieu's plugin",
      description: "Settings for Mathieu's plugin.",
      iconName: 'fas fa-edit',
    });

    await joplin.settings.registerSettings({
      [showColoredImportsId]: {
        section: sectionName,
        value: true, // Default value
        public: true, // Show in the settings screen
        type: SettingItemType.Bool,
        label: 'Show colored imports',
      },
    });
  };

  const registerMessageListener = async (contentScriptId: string) => {
    await joplin.contentScripts.onMessage(
      contentScriptId,

      // Sending messages with `context.postMessage`
      // from the content script with `contentScriptId`
      // calls this onMessage listener:
      async (message: any) => {
        if (message === 'getSettings') {
          const settingValue = await joplin.settings.value(showColoredImportsId);
          return {showColoredImports: settingValue,};
        }
      },
    );
  };


  /**
   * Load the plugin into Joplin
   */
  export async function init() {


    /**
     * Register MarkdownIt plugin
     */

    // Define script ID
    const contentScriptId = 'noteVariablesMD';

    // Add settings
    await registerSettings();
    await registerMessageListener(contentScriptId);

    // Register the script
    await joplin.contentScripts.register(
      ContentScriptType.MarkdownItPlugin,
      contentScriptId,
      './markdownItPlugin.js'
    );

    /**
     * Register the Joplin plugin
     */

    // Attach functions to events
    await joplin.workspace.onNoteChange(onNoteChangeHandler);
    await joplin.workspace.onNoteSelectionChange(loadVariablesNotes);


    // Add the 'Note' menu command
    await joplin.commands.register({
      name: 'newVariablesNote',
      label: 'Create variables note',
      iconName: 'fas fa-superscript',
      execute: async () => {
        const folder = await joplin.workspace.selectedFolder();
        createVariablesNote(folder.id);
      },
    });
    await joplin.views.menuItems.create('Create variables vote', 'newVariablesNote', MenuItemLocation.Note);

    // Init the variables
    await loadVariablesNotes();
  }
}

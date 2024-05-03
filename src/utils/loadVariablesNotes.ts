import joplin from 'api';
import { findVariablesNotes } from './findVariablesNotes';
import { fetchImplicitNotes } from './fetchImplicitNotes';
import { parseNote } from './parseNote';

export const loadVariablesNotes = async () => {

    /**
     * Load all notes
     */
    // Fetch all notes
    const notes = await findVariablesNotes();

    // Fetch notes content
    const notesData = await Promise.all(
        notes.map(async note => {
            return await joplin.data.get(['notes', note.id], { fields: ['title', 'body'] });
        })
    );

    console.info('Begining parsing of notes:');
    console.info(JSON.stringify(notesData));

    // Parse into usable format
    const variableGroups: any = {};
    notesData.forEach(note => {
        if (variableGroups[note.title] != null) return;
        console.info('Parsing note: "' + note.title + '"');
        const vars = parseNote(note);
        variableGroups[note.title] = {
            vars,
        };
    });

    /**
     * Identify implicit notes
     */
    // Fetch implicit notes
    const implicitNotes = await fetchImplicitNotes();

    // Parse into usable format
    const implicitIDs = [];
    implicitNotes.forEach(note => {implicitIDs.push(note.title);});

    /**
     * Export to local storage for sharing with MDP
     */
    localStorage.setItem('NoteVariables', JSON.stringify(variableGroups));
    localStorage.setItem('ImplicitNoteVariablesIDs', JSON.stringify(implicitIDs));
    localStorage.setItem('UpdateNoteVariablesMDP', 'true');

    // Debug
    console.info('Stored variable notes:');
    console.info(JSON.stringify(variableGroups));
    console.info('Stored implicit IDs:');
    console.info(JSON.stringify(implicitIDs));
};

import joplin from 'api';
import { parseNote } from './parseNote';

export const loadLocalVariables = async () => {
  const localNote = await joplin.workspace.selectedNote();
  const vars = parseNote(localNote);
  const variableGroups: any = {};
  variableGroups[localNote.title] = {
    vars,
  };
  
  localStorage.setItem('LocalVariables', JSON.stringify(variableGroups));
};

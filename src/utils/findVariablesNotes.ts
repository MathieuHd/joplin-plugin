import joplin from 'api';
import { fetchAllNotes } from './fetchAllNote';

export const findVariablesNotes = async () => {
  const allNotes = await fetchAllNotes();
  return allNotes.filter(note => (note.title as string).match(/^\%[^%]*\%$/) != null);
};

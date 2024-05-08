const globalRegExp = /^\|\s*[^|]*\s*\|\s*[^|]*\s*\|/gm;
const lineRegExp = /^\|\s*([^|]*)\s*\|\s*([^|]*)\s*\|/;

export const parseNote = (note: any) => {

  const { body } = note;

  const left_delim = (body as string).match(/`set left_delim=.?;`/) != null ? (body as string).match(/`set left_delim=(.?);`/)[1] : "%";
  const right_delim = (body as string).match(/`set right_delim=.?;`/) != null ? (body as string).match(/`set right_delim=(.?);`/)[1] : "%";

  const rows = (body as string).match(globalRegExp);

  const parsedVariables: any = {};

  if (rows == null) return parsedVariables;

  for (const row of rows.slice(2)) {
    const match = row.match(lineRegExp);
    if (match[1] === '') continue;
    const variable = left_delim + match[1].trimEnd() + right_delim;
    const value = match[2].trimEnd();

    if (parsedVariables[variable] != null) continue;

    parsedVariables[variable] = value;
    console.debug("Added variable '" + variable + "' : " + value);
  }

  return parsedVariables;
};

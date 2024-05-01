import joplin from 'api';

export const fetchAllNotes = async () => {

  const tagTitle = 'variablenote';
  const tagId = (await joplin.data.get(['tags'])).items.filter(tag => tag.title == tagTitle)[0].id;
  console.info('TagId: ' + tagId);

  const items = [];
  let page = 1;
  while (true) {
    // const result = await joplin.data.get(['tags', tagId, 'notes'], { page });
    const result = await joplin.data.get(['notes'], { page });
    items.push(...result.items);
    console.info('Found new items:');
    console.info(JSON.stringify(result.items));
    if (!result.has_more) return items;
    page++;
  }
};

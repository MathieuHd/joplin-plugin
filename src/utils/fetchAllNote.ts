import joplin from 'api';

export const fetchAllNotes = async () => {

    const items = [];
    let page = 1;

    while (true) {
        const result = await joplin.data.get(['notes'], { page });
        items.push(...result.items);
   	console.debug('[FETC] Fetched the following notes:');
	console.debug(JSON.stringify(result.items));
        if (!result.has_more) return items;
        page++;
    }
};

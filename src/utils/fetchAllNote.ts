import joplin from 'api';

export const fetchAllNotes = async () => {

    const items = [];
    let page = 1;

    while (true) {
        const result = await joplin.data.get(['notes'], { page });
        items.push(...result.items);
   	console.info('Fetched the following notes:');
	console.info(JSON.stringify(result.items));
        if (!result.has_more) return items;
        page++;
    }
};

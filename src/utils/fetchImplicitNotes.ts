import joplin from 'api';

export const fetchImplicitNotes = async () => {

    const tagTitle = 'variablenote';
    const tagId = (await joplin.data.get(['tags'])).items.filter(tag => tag.title == tagTitle)[0].id;

    const items = [];
    let page = 1;

    while (true) {
        const result = await joplin.data.get(['tags', tagId, 'notes'], { page });
        items.push(...result.items);
        if (!result.has_more) return items; 
        page++;
    }
};

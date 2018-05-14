import uuid4 from 'uuid4';

export const createLayer = (id) => {
    if(!id) id = uuid4();
    let layer = new Layer({
        name: id
    });
    paper.project.addLayer(layer);
    return layer;
}
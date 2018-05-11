import paper from 'paper';
import store from '../../../store/store';

let localPath = null;

function onMouseDown(event) {
    let path = new Path();
    path.strokeColor = store.getters.toolArgs.color;
    path.strokeWidth = store.getters.toolArgs.size;
    path.add(event.point);
    localPath = path;
}

function onMouseDrag(event) {
    if (!localPath) return;
    localPath.add(event.point);
}

export const tool = new paper.Tool();
tool.onMouseDown = onMouseDown;
tool.onMouseDrag = onMouseDrag;
import paper from 'paper';
import store from '../../../store/store';

let local ={
    path : null,
    center : null,
};

function onMouseDown(event) {
    local.center = event.point;
}

function onMouseDrag(event) {
    if (local.path) {
        local.path.remove();
    }
    local.path = new Shape.Rectangle(local.center, event.point);
    local.path.strokeColor = store.getters.shapeArgs.color;
    local.path.strokeWidth = store.getters.shapeArgs.size;
}

function onMouseUp(event) {
    local.path = null;
}

export const tool = new paper.Tool();
tool.onMouseDown = onMouseDown;
tool.onMouseDrag = onMouseDrag;
tool.onMouseUp = onMouseUp;

import paper from 'paper';
import store from '../../../store/store';

let local ={
    path : null,
    center : null
};

function onMouseDown(event) {
    local.center = event.point;

}

function onMouseDrag(event) {
    if (local.path) {
        local.path.remove();
    }
    local.path = new Path.RegularPolygon(local.center, 3, Math.sqrt((event.point.x -  local.center.x)*(event.point.x -  local.center.x) + (event.point.y - local.center.y)*(event.point.y - local.center.y)));
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

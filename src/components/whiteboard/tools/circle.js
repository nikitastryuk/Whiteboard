import paper from 'paper';
import store from '../../../store/store';

let local ={
    path : null,
    center : null
};


function onMouseDown(event) {
    local.path = new Shape.Circle({
        center: event.point,
        strokeColor : store.getters.shapeArgs.color,
        strokeWidth : store.getters.shapeArgs.size
    });
    local.center = event.point;
}

function onMouseDrag(event) {
    if (!local.path) return;
    local.path.radius = Math.sqrt((event.point.x -  local.center.x)*(event.point.x -  local.center.x) + (event.point.y - local.center.y)*(event.point.y - local.center.y));
}


export const tool = new paper.Tool();
tool.onMouseDown = onMouseDown;
tool.onMouseDrag = onMouseDrag;

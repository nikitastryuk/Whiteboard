import paper from 'paper';
import store from '../../../store/store';

let local ={
    path : null
};

function onMouseDrag(event) {
    if (local.path) {
        local.path.remove();
    }
    local.path = new Path.Line({
        from: event.downPoint,
        to: event.point,
        strokeColor: 'black'
    });
    local.path.strokeColor = store.getters.shapeArgs.color;
    local.path.strokeWidth = store.getters.shapeArgs.size;
}

function onMouseUp(event) {
    local.path = null;
}


export const tool = new paper.Tool();
tool.onMouseDrag = onMouseDrag;
tool.onMouseUp = onMouseUp;
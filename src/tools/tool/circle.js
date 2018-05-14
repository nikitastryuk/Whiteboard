import paper from 'paper';
import store from '../../store/store';
import { createLayer } from '../shared';
import history from '../history';

let local ={
    path : null,
    center : null
};

export class CircleAction{
    constructor(args) {
        this._args = args;
    }
    exec() {
        if (!paper.project.layers[this._args.layer]) {
            createLayer(this._args.layer);
        }
        if (this.removed) {
            return paper.project.layers[this._args.layer].addChildren(this.removed);
        }
    }
    unexec() {
        this.removed = paper.project.layers[this._args.layer].removeChildren();
    }
}


function onMouseDown(event) {

    let layer = createLayer();
    local.path = new Shape.Circle({
        center: event.point,
        strokeColor : store.getters.shapeArgs.color,
        strokeWidth : store.getters.shapeArgs.size
    });
    layer.addChild(local.path);
    local.center = event.point;
}

function onMouseDrag(event) {
    if (!local.path) return;
    local.path.radius = Math.sqrt((event.point.x -  local.center.x)*(event.point.x -  local.center.x) + (event.point.y - local.center.y)*(event.point.y - local.center.y));
}


function onMouseUp(event) {
    const action = new CircleAction({
        layer: local.path.layer.name,
        tool: store.getters.tool,
        center: local.center,
        radius: local.path.radius
    });
    local.path = null;
    history.add(action);
}

export const tool = new paper.Tool();
tool.onMouseDown = onMouseDown;
tool.onMouseDrag = onMouseDrag;
tool.onMouseUp = onMouseUp;
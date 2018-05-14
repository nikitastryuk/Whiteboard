import paper from 'paper';
import store from '../../store/store';
import { createLayer } from '../shared';
import history from '../history';

let local ={
    path : null
};

export class LineAction{
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
    get args() {
        return this._args;
    }
}

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
    let layer = createLayer();
    layer.addChild(local.path);
    
    const action = new LineAction({
        layer: local.path.layer.name,
        tool: store.getters.tool,
        points: local.path.segments.map(seg => {
            return {
                x: seg._point._x,
                y: seg._point._y
            }
        })
    });
    history.add(action);
    local.path = null;
}


export const tool = new paper.Tool();
tool.onMouseDrag = onMouseDrag;
tool.onMouseUp = onMouseUp;
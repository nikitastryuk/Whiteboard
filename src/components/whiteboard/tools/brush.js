import paper from 'paper';
import store from '../../../store/store';

let localPath = null;

function onMouseDown(event) {
    let path = new Path();
    let rgb = hexToRgb(store.getters.toolArgs.color || '#000000');
    path.fillColor = `rgba(${rgb.r},${rgb.g},${rgb.b},0.4)`;
    localPath = path;
}

function onMouseDrag(event) {
    if (!localPath) return;
    var step = event.delta;
    step.x *= store.getters.toolArgs.size / 2.8;
    step.y *= store.getters.toolArgs.size / 2.8;
    step.angle += 90;

    var top = event.middlePoint.add(step);
    var bottom = event.middlePoint.subtract(step);

    localPath.add(top);
    localPath.insert(0, bottom);
}

export const tool = new paper.Tool();
tool.minDistance = 7;
tool.maxDistance = 7;
tool.onMouseDown = onMouseDown;
tool.onMouseDrag = onMouseDrag;

function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

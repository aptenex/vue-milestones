import Position from './Position';
import Width from './Width';
import Height from './Height';

export default function (elem, constrainedBox, x = 0, y = 0, w = null, h = null) {
    const endX = w ? w + x : constrainedBox.clientWidth - x;
    const endY = h ? h + y : constrainedBox.clientWidth - y;
    if (Position(elem, constrainedBox).left < x) {
        return `transform:translateX(${x - Position(elem, constrainedBox).left}px)`;
    }
    if (Position(elem, constrainedBox).left + Width(elem) > endX) {
        return `transform:translateX(${endX - (Position(elem, constrainedBox).left + Width(elem))}px)`;
    }

    if (Position(elem, constrainedBox).top < y) {
        return `transform:translateX(${x - Position(elem, constrainedBox).left}px)`;
    }
    if (Position(elem, constrainedBox).top + Height(elem) > endY) {
        return `transform:translateX(${endY - (Position(elem, constrainedBox).top + Height(elem))}px)`;
    }
    return '';
}

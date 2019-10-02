export default function (elem, constrainedBox) {
    const cBox = constrainedBox.getBoundingClientRect();
    const elBox = elem.getBoundingClientRect();

    if (elBox.right > cBox.right) {
        return `transform:translateX(${Math.round(0 - elBox.width)}px)`;
    }

    if (elBox.left < cBox.left) {
        // This isn't working.

        return 'transform:translateX(0px)';
    }
    return '';
}

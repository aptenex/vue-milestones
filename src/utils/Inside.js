export default function (el1, el2) {
    const rect1 = el1.getBoundingClientRect();
    const rect2 = el2.getBoundingClientRect();

    return (
        ((rect2.left <= rect1.left) && (rect1.left <= rect2.right))
        && ((rect2.left <= rect1.right) && (rect1.right <= rect2.right))
    );
}

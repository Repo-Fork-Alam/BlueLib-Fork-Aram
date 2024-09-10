export function handleClassClick(classId) {
    console.log(`Class clicked: ${classId}`);

    document.querySelectorAll('.class-item').forEach(item => {
        if (item.getAttribute('data-id') === classId) {
            item.style.backgroundColor = '#d3d3d3';
        } else {
            item.style.backgroundColor = '';
        }
    });
}

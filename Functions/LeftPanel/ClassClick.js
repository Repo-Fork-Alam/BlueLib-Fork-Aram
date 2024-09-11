export function handleClassClick(classId) {
    console.log(`Class clicked: ${classId}`);

    document.querySelectorAll('.class-item').forEach(item => {
        if (item.getAttribute('data-id') === classId) {
            item.style.backgroundColor = '#3b3b3b';
        } else {
            item.style.backgroundColor = '';
        }
    });
}

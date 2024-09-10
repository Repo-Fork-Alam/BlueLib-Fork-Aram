export function handlePackageClick(packageId) {
    const classItems = document.querySelectorAll('.class-item');

    classItems.forEach(classItem => {
        if (classItem.getAttribute('data-package-id') === packageId) {
            classItem.style.display = 'list-item';
        } else {
            classItem.style.display = 'none';
        }
    });
}

import { leftPanelContent } from './Content.js';
import { setupResizing } from './ResizingLogic.js';
import { setupEventListeners } from './EventListeners.js';


function modifyPanelContent(options = {}) {
    const { hidePackages = [], hideClasses = [] } = options;

    hidePackages.forEach(id => {
        const packageItem = document.querySelector(`.package-item[data-id="${id}"]`);
        if (packageItem) {
            packageItem.style.display = 'none';
        }
    });

    hideClasses.forEach(id => {
        const classItem = document.querySelector(`.class-item[data-id="${id}"]`);
        if (classItem) {
            classItem.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const leftPanelContainer = document.getElementById('left-panel-container');

    if (leftPanelContainer) {
        leftPanelContainer.innerHTML = leftPanelContent;
    }

    setupResizing();
    setupEventListeners();

/** Example on how to hide specific packages and classes based on the current page
    const currentPage = window.location.pathname;
    if (currentPage === '/page1') {
        modifyPanelContent({
            hidePackages: [1, 3, 5],
            hideClasses: [2, 4, 6]
        });
    } else if (currentPage === '/page2') {
        modifyPanelContent({
            hidePackages: [2, 4],
            hideClasses: [1, 5]
        });
    }
        */
});

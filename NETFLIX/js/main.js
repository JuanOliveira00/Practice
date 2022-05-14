const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    //add border to current tab
    this.classList.add('tab-border');
    //grab content item from the dom

    const tabContentItem = document.querySelector(`#${this.id}-content`);

    // add show class
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove('tab-border');
    });
}
// remove show class from all content items
function removeShow() {
    tabContentItems.forEach(item =>
        item.classList.remove('show'));
}
// Listen for tab item click
tabItems.forEach(item => {
    item.addEventListener('click', selectItem);
});


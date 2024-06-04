const tabLinks = document.getElementsByClassName('tab-links');
const tabContents = document.getElementsByClassName('tab-content');

function openTab(tabName){
    for(let tablink of tabLinks){
        tablink.classList.remove('active-link')
    }
    for(let tabcontent of tabContents){
        tabcontent.classList.remove('active-tab')
    }
}
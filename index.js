const entryForm = document.getElementById('entryForm');
const entriesSection = document.getElementById('entries');
const entryTextbox = document.getElementsByClassName('entry-textbox');
const entriesNav = document.querySelector('.entries-nav');


let count = 1 
function addEntryToDom(event) {
    event.preventDefault();
    const entryDiv = document.createElement('div');
    entryDiv.className = 'single-entry';
    entryDiv.innerText = entryTextbox[0].value;
    entryDiv.style.display = 'none';
    entriesSection.appendChild(entryDiv);
    entryTextbox[0].value = '';

    const displayEntryButton = document.createElement('button');
    displayEntryButton.className = 'display-entry-button';
    displayEntryButton.innerText = count;
    entriesNav.appendChild(displayEntryButton);

    displayEntryButton.addEventListener('click', function() {
        const allEntries = document.querySelectorAll('.single-entry');
        for (let index = 0; index < allEntries.length; index++) {
            allEntries[index].style.display = 'none';
        }
        entryDiv.style.display = 'block';        
    })
    
    count ++
}

entryForm.addEventListener('submit', addEntryToDom)
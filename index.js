const entryForm = document.getElementById('entryForm');
const entriesSection = document.getElementById('entries');
const entryTextbox = document.getElementsByClassName('entry-textbox');
const entriesNav = document.querySelector('.entries-nav');


function addEntryToDom(event) {
    event.preventDefault();
    const entryDiv = document.createElement('div');
    entryDiv.className = 'single-entry';
    entryDiv.innerText = entryTextbox[0].value;
    entryDiv.style.display = 'none';
    entriesSection.appendChild(entryDiv);
    entryTextbox[0].value = '';
}

entryForm.addEventListener('submit', addEntryToDom)
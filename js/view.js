function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1>Pause til 10:38</h1
        ${createHtmlForPerson(model.selectedPersonId, '', 'h3', false)}
    `;
}

function createHtmlForPerson(personId, label, tag, showButton) {
    const person = findPersonById(personId);
    if (person == null) return '';
    const btnHtml = !showButton ? '' : '<button onclick="selectPerson(${person.id})">vis</button>';
    return/*HTML*/`
        <${tag}>
            ${label} ${person.firstName} - Født: ${person.birthYear}
            ${btnHtml}
        </${tag}>    
    `;
}

function findPersonById(id) {
    for (let person of model.people) {
        if (person.id == id) return person;
    }
    return null;
}

function findPersonById2(id) {
    return model.people.find(p => p.id == 3);
}


function updateView() {
    document.getElementById('app').innerHTML =
        createFullHtmlForPerson(8);
}
function createFullHtmlForPerson(id) {
    const person = findPersonById(id);
    let html = createHtmlForPerson(id, '', 'h3', false)
        + createHtmlForPerson(person.mother, 'Mor:', 'p', true)
        + createHtmlForPerson(person.father, 'Far:', 'p', true);
    const children = findChildren(id);
    if (!children.length){
        html += "<h3>Barn</h3>Ingen barn";
        return html;
    } 
    for (let child of children) {
        html += createFullHtmlForPerson(child.id);
    }
    return html;
}

function findChildren(id) {
    let children = [];
    for (let person of model.people) {
        if (person.mother == id || person.father == id) {
            children.push(person);
        }
    }
    return children;
}
function createHtmlForChildren(id) {
    const children = findChildren(id);
    if (!children.length) return "Ingen barn";
    let html = '';
    for (let child of children) {
        html += createHtmlForPerson(child.id, '', 'p', true);
    }
    return html;
}

function createHtmlForPerson(personId, label, tag, showButton) {
    const person = findPersonById(personId);
    if (person == null) return '';
    const btnHtml = !showButton ? '' : `<button onclick = "selectPerson(${person.id})" > vis</button > `;
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


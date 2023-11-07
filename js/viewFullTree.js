function createFullHtmlForPerson(id) {
    let html = createHtmlForPerson(id, '', 'h3', false)
    const children = findChildren(id);
    if (!children.length)return html;
    for (let child of children) {
        html += /*HTML*/`
            <blockquote>
            ${createFullHtmlForPerson(child.id)}
            </blockquote>
        `;
    }
    return html;
}

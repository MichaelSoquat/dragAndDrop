tasks = [{
        'id': 0,
        'name': 'Putzen',
        'category': 'open'
    },
    {
        'id': 1,
        'name': 'Streichen',
        'category': 'open'
    },
    {
        'id': 2,
        'name': 'Kochen',
        'category': 'open'
    }
]

currentDraggedElement = '';

function render() {
    document.getElementById('open').classList.remove('dragOver');
    document.getElementById('closed').classList.remove('dragOver');
    renderOpenTasks();
    renderClosedTasks();
}

function renderOpenTasks() {
    let open = document.getElementById('open');
    open.innerHTML = '';
    let openTasks = tasks.filter(t =>
        t['category'] == 'open')
    for (let i = 0; i < openTasks.length; i++) {
        open.innerHTML += renderElements(openTasks, i);
    }
}

function renderClosedTasks() {
    let closed = document.getElementById('closed');
    closed.innerHTML = '';
    let closedTasks = tasks.filter(t =>
        t['category'] == 'closed')
    console.log(closedTasks)
    for (let i = 0; i < closedTasks.length; i++) {
        closed.innerHTML += renderElements(closedTasks, i);
    }
}

function renderElements(tasks, i) {

    return `<div draggable ="true" id="${tasks[i]['id']}" ondragstart = "startDraggin(${tasks[i]['id']})"class="todos">${tasks[i]['name']}</div>`;

}

function startDraggin(id) {
    currentDraggedElement = id;
    console.log(currentDraggedElement)
}

function allowDrop(event, id) {
    document.getElementById(id).classList.add('dragOver');
    event.preventDefault();
}

function dropElement(category) {

    let get = tasks.filter(t => t['id'] == currentDraggedElement)
    get[0].category = category;
    render();
}

function resetDarkColor(id) {
    document.getElementById(id).classList.remove('dragOver');
}
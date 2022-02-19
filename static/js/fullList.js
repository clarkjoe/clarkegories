const tableHeaders = [
    "Category"
]
const catergories = [
    "cateory1",
    "cateory2",
    "cateory3",
]

function generateTableHead(table) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let tableHeader of tableHeaders) {
        let th = document.createElement("th");
        let text = document.createTextNode(tableHeader);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTableRows(table) {
    for (let category of catergories) {
        let row = table.insertRow();
        let text = document.createTextNode(category)
        row.appendChild(text)
    }
}

let table = document.querySelector("table");
generateTableHead(table);
generateTableRows(table);

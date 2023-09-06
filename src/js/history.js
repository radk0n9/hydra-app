
const itemsLocalStorage = {...localStorage};

const table = document.querySelector("#table--js");

const arrayItems = Object.entries(itemsLocalStorage)

const setAttributes = (element, attrs) => {
    for (var key in attrs) {
        console.log(element.setAttribute(key, attrs[key]));
    };
};

arrayItems.forEach(item => {
    const inserRow = table.insertRow(item);
    var cellDate = inserRow.insertCell(0)
    var cellValue = inserRow.insertCell(1)
    cellDate.innerHTML = item[0]
    cellValue.innerHTML = item[1]
    cellDate.classList.add("row");
    cellValue.classList.add("row");
})



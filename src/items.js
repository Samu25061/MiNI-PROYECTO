let items = [];

function getItems() {
    return items;
}

function addItem(item) {
    items.push(item);
    return items;
}

function getItemByIndex(index) {
    return items[index];
}

function updateItem(index, newItem) {
    items[index] = newItem;
    return items;
}

function deleteItem(index) {
    items.splice(index, 1);
    return items;
}

function clearItems() {
    items = [];
}

module.exports = {
    getItems,
    addItem,
    getItemByIndex,
    updateItem,
    deleteItem,
    clearItems,
    existsItem,
    countItems
};

function existsItem(name) {
    return items.includes(name);
}

function countItems() {
    return items.length;
}
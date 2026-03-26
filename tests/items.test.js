const {
    getItems,
    addItem,
    getItemByIndex,
    updateItem,
    deleteItem,
    clearItems,
    existsItem,
    countItems
} = require('../src/items');
beforeEach(() => {
    clearItems();
});

test('Debe iniciar vacío', () => {
    expect(getItems()).toEqual([]);
});

test('Debe agregar un item', () => {
    addItem('A');
    expect(getItems()).toEqual(['A']);
});

test('Debe agregar varios items', () => {
    addItem('A');
    addItem('B');
    expect(getItems().length).toBe(2);
});

test('Debe obtener item por índice', () => {
    addItem('A');
    expect(getItemByIndex(0)).toBe('A');
});

test('Debe actualizar item', () => {
    addItem('A');
    updateItem(0, 'B');
    expect(getItemByIndex(0)).toBe('B');
});

test('Debe eliminar item', () => {
    addItem('A');
    deleteItem(0);
    expect(getItems()).toEqual([]);
});

test('Eliminar reduce tamaño', () => {
    addItem('A');
    addItem('B');
    deleteItem(0);
    expect(getItems().length).toBe(1);
});

test('Agregar mantiene orden', () => {
    addItem('A');
    addItem('B');
    expect(getItems()[1]).toBe('B');
});

test('Actualizar mantiene tamaño', () => {
    addItem('A');
    updateItem(0, 'C');
    expect(getItems().length).toBe(1);
});

test('Limpiar deja vacío', () => {
    addItem('A');
    clearItems();
    expect(getItems()).toEqual([]);
});


test('Debe verificar si existe un item', () => {
    addItem('A');
    expect(existsItem('A')).toBe(true);
});

test('Debe contar los items', () => {
    addItem('A');
    addItem('B');
    expect(countItems()).toBe(2);
});
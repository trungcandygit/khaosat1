// Lưu dữ liệu vào localStorage
function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Lấy dữ liệu từ localStorage
function loadFromStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Xóa dữ liệu khỏi localStorage
function removeFromStorage(key) {
    localStorage.removeItem(key);
}

// Xóa tất cả dữ liệu trong localStorage
function clearStorage() {
    localStorage.clear();
}

// Ví dụ: Lưu, tải, và xóa dữ liệu
// Lưu dữ liệu
function exampleSave() {
    const exampleData = {
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com'
    };
    saveToStorage('userData', exampleData);
}

// Tải dữ liệu
function exampleLoad() {
    const loadedData = loadFromStorage('userData');
    console.log('Loaded Data:', loadedData);
}

// Xóa dữ liệu
function exampleRemove() {
    removeFromStorage('userData');
}

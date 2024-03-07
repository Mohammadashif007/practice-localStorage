const addProduct = () => {
    const productField = document.getElementById("product");
    const productName = productField.value;
    const quantityField = document.getElementById("quantity");
    const quantity = quantityField.value;

    productField.value = "";
    quantityField.value = "";

    displayProduct(productName, quantity);
    saveDataToLocal(productName, quantity);
};

const displayProduct = (product, quantity) => {
    const ul = document.getElementById("ul");
    const li = document.createElement("li");
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
};

const getLocalStorageData = () => {
    let data = {};
    const storedData = localStorage.getItem("data");
    if (storedData) {
        data = JSON.parse(storedData);
    }
    return data;
};

const saveDataToLocal = (product, quantity) => {
    const storedData = getLocalStorageData();
    storedData[product] = quantity;
    console.log(storedData);
    const dataStringified = JSON.stringify(storedData);
    localStorage.setItem("data", dataStringified);
};

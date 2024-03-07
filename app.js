const addProduct = () => {
    const productInputField = document.getElementById("product");
    const productInputText = productInputField.value;
    const productQuantityField = document.getElementById("quantity");
    const productQuantityText = productQuantityField.value;
    productInputField.value = "";
    productQuantityField.value = "";
    displayProduct(productInputText, productQuantityText);
    saveProductToLocal(productInputText, productQuantityText);
};
const displayProduct = (product, quantity) => {
    const ul = document.getElementById("ul");
    const li = document.createElement("li");
    li.innerText = `${product} : ${quantity}`;
    ul.appendChild(li);
};

const getLocalStorage = () => {
    let cart = {};
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
};

const saveProductToLocal = (product, quantity) => {
    let savedCart = getLocalStorage();
    savedCart[product] = quantity;
    console.log(savedCart);
    const cartStringify = JSON.stringify(savedCart);
    localStorage.setItem("cart", cartStringify);
};

const displayFromLocalStorage = () => {
    const storedCart = getLocalStorage("cart");
    for(const product in storedCart){
        const quantity = storedCart[product]
        console.log(product, quantity);
        displayProduct(product, quantity)
    }
    console.log(storedCart);

};
displayFromLocalStorage();

//use local storage manage cart data
const addToDb = (id) => {
  let shoppingCart = getShoredCard();

  //add to cart
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

// get shored cart
const getShoredCard = () => {
  let shoppingCart = {};

  // get shopping cart
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

// delete get items
const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

// delete shopping cart
const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToDb, removeFromDb, deleteShoppingCart, getShoredCard };

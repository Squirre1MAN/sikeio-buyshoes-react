"use strict";

var products = {

  "Jameson-vulc": {
    id: "Jameson-vulc",
    name: "Jameson-vulc",
    price: 64.99,
    imagePath: "assets/shoes/jameson-vulc-brown-gum-orig.png",
    gender: "man"
  },

  "marana-x-hook-ups": {
    id: "marana-x-hook-ups",
    name: "Marana X Hook-Up",
    price: 79.99,
    imagePath: "assets/shoes/marana-x-hook-ups-black-orig.png",
    gender: "man"
  },

  "jameson-e-lite": {
    id: "jameson-e-lite",
    name: "Jameson E-Lite",
    price: 69.99,
    imagePath: "assets/shoes/jameson-e-lite-maroon-orig.png",
    gender: "man"
  },

  "jameson-e-lite-julian-davidson-4": {
    id: "jameson-e-lite-julian-davidson-4",
    name: "Jameson E-Lite Julian Davidson",
    price: 74.99,
    imagePath: "assets/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
    gender: "man"
  },

  "scout-womens-6": {
    id: "scout-womens-6",
    name: "Scout Women's",
    imagePath: "assets/shoes/scout-womens-6-teal-orig.png",
    price: 59.99,
    gender: "woman"
  },

  "scout-womens-coco-ho-5": {
    id: "scout-womens-coco-ho-5",
    name: "Scout Women's Coco Ho",
    imagePath: "assets/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
    price: 59.99,
    gender: "woman"
  },

  "jameson-2-womens-8": {
    id: "jameson-2-womens-8",
    name: "Jameson 2 Women's",
    imagePath: "assets/shoes/jameson-2-womens-8-black-white-gum-orig.png",
    price: 59.99,
    gender: "woman"
  },

  "corby-womens-2": {
    id: "corby-womens-2",
    name: "Corby Women's",
    imagePath: "assets/shoes/corby-womens-2-tan-white-orig.png",
    price: 44.99,
    gender: "woman"
  }
};

var cartItems = {
  "Jameson-vulc": {
    id: "Jameson-vulc",
    quantity: 1,
    imagePath: "assets/shoes/jameson-vulc-brown-gum-orig.png"
  },

  "scout-womens-6": {
    id: "scout-womens-6",
    quantity: 2,
    imagePath: "assets/shoes/scout-womens-6-teal-orig.png"
  },
  "corby-womens-2": {
    id: "corby-womens-2",
    quantity: 3,
    imagePath: "assets/shoes/corby-womens-2-tan-white-orig.png"
  },
  "marana-x-hook-ups": {
    id: "marana-x-hook-ups",
    quantity: 2,
    imagePath: "assets/shoes/marana-x-hook-ups-black-orig.png"
  }
};

//Component: SiteTitle
var SiteTitle = React.createClass({
  displayName: "SiteTitle",

  render: function render() {
    return React.createElement(
      "h2",
      null,
      "Buy Me Shoes♥"
    );
  }
});

//Component: Product
var Product = React.createClass({
  displayName: "Product",

  buildCartOption: function buildCartOption() {
    var id = this.props.product.id;
    if (cartItems[id]) {
      return React.createElement(QuantityControl, { item: cartItems[id], variant: "gray" });
    } else {
      return React.createElement(
        "a",
        { className: "product__add" },
        " ",
        React.createElement("img", { className: "product__add__icon", src: "img/cart-icon.svg" })
      );
    }
  },

  render: function render() {
    var _props$product = this.props.product;
    var name = _props$product.name;
    var price = _props$product.price;
    var imagePath = _props$product.imagePath;

    return React.createElement(
      "div",
      { className: "product" },
      React.createElement(
        "div",
        { className: "product__display" },
        React.createElement("img", { className: "product__img", src: imagePath }),
        this.buildCartOption(),
        React.createElement(
          "div",
          { className: "product__price" },
          " ",
          price,
          " "
        )
      ),
      React.createElement(
        "div",
        { className: "product__description" },
        React.createElement(
          "div",
          { className: "product__name" },
          name
        ),
        React.createElement("img", { className: "product__heart", src: "img/heart.svg" })
      )
    );
  }
});

//Component: Products
var Products = React.createClass({
  displayName: "Products",

  render: function render() {
    var children = [];
    for (var item in products) {
      children.push(React.createElement(Product, { key: products[item].id, product: products[item] }));
    }

    return React.createElement(
      "div",
      { className: "products" },
      children
    );
  }
});

var QuantityControl = React.createClass({
  displayName: "QuantityControl",

  render: function render() {
    var _props$item = this.props.item;
    var id = _props$item.id;
    var quantity = _props$item.quantity;

    var variant = this.props.variant;

    //if dose not have a variant, return the default setting
    var className = "adjust-qty " + (variant ? "adjust-qty--" + variant : "");

    return React.createElement(
      "div",
      { className: className },
      React.createElement(
        "a",
        { className: className + "__button" },
        "-"
      ),
      React.createElement(
        "div",
        { className: className + "__number" },
        quantity
      ),
      React.createElement(
        "a",
        { className: className + "__button" },
        "+"
      )
    );
  }
});

//Component: CartItem
var CartItem = React.createClass({
  displayName: "CartItem",

  render: function render() {
    var _props$cartItem = this.props.cartItem;
    var id = _props$cartItem.id;
    var quantity = _props$cartItem.quantity;
    var imagePath = _props$cartItem.imagePath;

    return React.createElement(
      "div",
      { className: "cart-item" },
      React.createElement(
        "div",
        { className: "cart-item__top-part" },
        React.createElement(
          "div",
          { className: "cart-item__image" },
          React.createElement("img", { src: imagePath })
        ),
        React.createElement(
          "div",
          { className: "cart-item__top-part__middle" },
          React.createElement(
            "div",
            { className: "cart-item__title" },
            id
          ),
          React.createElement(
            "div",
            { className: "cart-item__price" },
            "$299"
          )
        ),
        React.createElement("img", { className: "cart-item__trash", src: "img/trash-icon.svg" })
      ),
      " ",
      React.createElement(
        "div",
        { className: "cart-item__qty" },
        React.createElement(
          "div",
          { className: "adjust-qty" },
          React.createElement(
            "a",
            { className: "adjust-qty__button" },
            "-"
          ),
          React.createElement(
            "div",
            { className: "adjust-qty__number" },
            quantity
          ),
          React.createElement(
            "a",
            { className: "adjust-qty__button" },
            "+"
          )
        )
      )
    );
  }
});

//Component: Cart
var Cart = React.createClass({
  displayName: "Cart",

  render: function render() {
    var children = [];
    for (var item in cartItems) {
      children.push(React.createElement(CartItem, { key: cartItems[item].id, cartItem: cartItems[item] }));
    }

    return React.createElement(
      "div",
      { className: "cart" },
      React.createElement(
        "h3",
        { className: "cart__title" },
        "Shopping Cart (2)"
      ),
      children
    );
  }
});

//Component: CheckOut
var CheckOut = React.createClass({
  displayName: "CheckOut",

  render: function render() {
    return React.createElement(
      "div",
      { className: "checkout" },
      React.createElement("hr", { className: "checkout__divider" }),
      React.createElement("input", { type: "text", className: "checkout__coupon-input", placeholder: "coupon code : 2333" }),
      React.createElement(
        "p",
        { className: "checkout__coupon--warning" },
        "No such coupon code!"
      ),
      React.createElement(
        "div",
        { className: "checkout__amount" },
        React.createElement(
          "div",
          { className: "checkout__amount--Discount" },
          React.createElement(
            "div",
            { className: "checkout__amount--Discount_left" },
            "Discount"
          ),
          React.createElement(
            "div",
            { className: "checkout__amount--Discount_right" },
            "-$90.02"
          )
        ),
        React.createElement(
          "div",
          { className: "checkout__amount--Subtotal" },
          React.createElement(
            "div",
            { className: "checkout__amount--Subtotal_left" },
            "Subtotal"
          ),
          React.createElement(
            "div",
            { className: "checkout__amount--Subtotal_right" },
            "$450.12"
          )
        ),
        React.createElement(
          "div",
          { className: "checkout__amount--saving" },
          "$360.09"
        ),
        React.createElement(
          "div",
          { className: "checkout__amount--button__area" },
          React.createElement(
            "div",
            { className: "checkout__amount--button", href: "#" },
            React.createElement("img", { className: "checkout__amount--button--icon", src: "img/cart-icon.svg" }),
            React.createElement(
              "div",
              { className: "checkout__amount--button--text" },
              "Checkout"
            )
          )
        )
      ),
      " "
    );
  }
});

var App = React.createClass({
  displayName: "App",

  render: function render() {
    return React.createElement(
      "div",
      { className: "site" },
      React.createElement(
        "div",
        { className: "bg" },
        React.createElement("div", { className: "bg__img" })
      ),
      React.createElement(
        "div",
        { className: "site__main" },
        React.createElement(
          "div",
          { className: "site__left-sidebar" },
          React.createElement(SiteTitle, null)
        ),
        React.createElement(
          "div",
          { className: "site__content" },
          React.createElement(Products, null)
        ),
        " "
      ),
      " ",
      React.createElement(
        "div",
        { className: "site__right-sidebar" },
        React.createElement(Cart, null),
        React.createElement(CheckOut, null)
      ),
      " ",
      React.createElement(
        "a",
        { className: "site__right-sidebar-toggle" },
        React.createElement("img", { src: "img/arrow-icon.svg" })
      )
    );
  }
});

function makeCartScrollNicely() {
  var cart = document.querySelector(".cart");
  Ps.initialize(cart, {
    wheelSpeed: 2
  });
  console.log("perfect-scrollbar loaded to cart.");
}

function makeProductsScrollNicely() {
  var products = document.querySelector(".products");
  Ps.initialize(products, {
    wheelSpeed: 2
  });
  console.log("perfect-scrollbar loaded to products.");
}

window.onload = function () {
  // 使用 App 组件替换 `#root` 的 innerHTML。
  React.render(React.createElement(App, null), document.querySelector("#root"));
  console.log("app loaded.");
  makeCartScrollNicely();
  makeProductsScrollNicely();
};
/* cart-item__top-part */ /* checkout__amount */ /* site__content */ /* site__main */ /* site__right-sidebar */
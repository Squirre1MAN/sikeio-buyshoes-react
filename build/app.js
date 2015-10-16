"use strict";

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
          "Test"
        ),
        React.createElement(
          "div",
          { className: "site__content" },
          "Test2"
        ),
        " "
      ),
      " ",
      React.createElement(
        "div",
        { className: "site__right-sidebar" },
        "Test3"
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

window.onload = function () {
  // 使用 App 组件替换 `#root` 的 innerHTML。
  React.render(React.createElement(App, null), document.querySelector("#root"));
  React.render(React.createElement(Products, null), document.querySelector("#site__content"));
  console.log("app loaded.");
};
/* <SiteTitle/> */ /* <Products/> */ /* site__content */ /* site__main */ /* <Cart/> */ /* <Checkout/> */ /* site__right-sidebar */

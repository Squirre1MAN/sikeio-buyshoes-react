var App = React.createClass({
  render: function() {
    return (

      <div className="site">
        <div className="bg">
          <div className="bg__img">
          </div>
        </div>
        <div className="site__main">
          <div className="site__left-sidebar">
          Test
            {/* <SiteTitle/> */}
          </div>
          <div className="site__content">
          Test2
            {/* <Products/> */}
          </div> {/* site__content */}
        </div> {/* site__main */}
        <div className="site__right-sidebar">
        Test3
          {/* <Cart/> */}
          {/* <Checkout/> */}
        </div> {/* site__right-sidebar */}
        <a className="site__right-sidebar-toggle">
          <img src="img/arrow-icon.svg" />
        </a>
      </div>
    );
  }
});

window.onload = () => {
    // 使用 App 组件替换 `#root` 的 innerHTML。
    React.render(<App />,document.querySelector("#root"));
    console.log("app loaded.")
}

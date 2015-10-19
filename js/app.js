
let products = {

    "Jameson-vulc":{
        id:"Jameson-vulc",
        name: "Jameson-vulc",
        price:64.99,
        imagePath: "assets/shoes/jameson-vulc-brown-gum-orig.png",
        gender:"man"
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
}

let cartItems = {
  "Jameson-vulc": {
    id: "Jameson-vulc",
    quantity: 1,
    imagePath: "assets/shoes/jameson-vulc-brown-gum-orig.png",
  },

  "scout-womens-6": {
    id: "scout-womens-6",
    quantity: 2,
    imagePath: "assets/shoes/scout-womens-6-teal-orig.png",
  },
  "corby-womens-2": {
      id: "corby-womens-2",
      quantity: 3,
      imagePath: "assets/shoes/corby-womens-2-tan-white-orig.png",
  },
  "marana-x-hook-ups": {
    id: "marana-x-hook-ups",
    quantity: 2,
    imagePath: "assets/shoes/marana-x-hook-ups-black-orig.png",
  },
  "scout-womens-coco-ho-5": {
   id: "scout-womens-coco-ho-5",
   quantity: 1,
   imagePath: "assets/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
  },
  "jameson-2-womens-8": {
     id: "jameson-2-womens-8",
     quantity: 1,
     imagePath: "assets/shoes/jameson-2-womens-8-black-white-gum-orig.png",
   },
};

//Component: SiteTitle
let SiteTitle = React.createClass({
  render: function() {
    return (
      <h2>Buy Me Shoes♥</h2>
    );
  }
});

//Component: Product
let Product = React.createClass({
  buildCartOption(){
      var id = this.props.product.id;
      if(cartItems[id]){
          return( <QuantityControl item={cartItems[id]} variant="gray"/>);
      }
      else {
          return(<a className="product__add"> <img className="product__add__icon" src="img/cart-icon.svg" /></a>);
      }
  },

  render: function() {
    let {name,price,imagePath} = this.props.product;
    return (
    <div className="product">
     <div className="product__display">
       <img className="product__img" src={imagePath} />

       {this.buildCartOption()}

       <div className="product__price"> {price} </div>
     </div>
     <div className="product__description">
       <div className="product__name">
         {name}
       </div>
       <img className="product__heart" src="img/heart.svg" />
     </div>
    </div>
    );
  }
});

//Component: Products
let Products = React.createClass({
  render() {
      let children = [];
      for (let item in products) {
          children.push(<Product key={products[item].id} product={products[item]}/>);
       }

    return (
      <div className="products">
        {children}
      </div>
    );
  }
});

let QuantityControl = React.createClass({
  render: function() {
    let {id,quantity} = this.props.item;
    let variant = this.props.variant;

    //if dose not have a variant, return the default setting
    let className = "adjust-qty " + (variant ? "adjust-qty--" + variant : "");

    return (
      <div className={className}>
        <a className={className+"__button"}>-</a>
        <div className={className+"__number"}>{quantity}</div>
        <a className={className+"__button"}>+</a>
      </div>
    );
  }
});

//Component: CartItem
var CartItem = React.createClass({
  render: function() {
    let {id,quantity,imagePath} = this.props.cartItem;
    return (

      <div className="cart-item">
        <div className="cart-item__top-part">
          <div className="cart-item__image">
            <img src={imagePath} />
          </div>
          <div className="cart-item__top-part__middle">
            <div className="cart-item__title">
              {id}
            </div>
            <div className="cart-item__price">
              $299
            </div>
          </div>
          <img className="cart-item__trash" src="img/trash-icon.svg" />
        </div> {/* cart-item__top-part */}

        <div className="cart-item__qty">
          <div className="adjust-qty">
            <a className="adjust-qty__button">-</a>
            <div className="adjust-qty__number">{quantity}</div>
            <a className="adjust-qty__button">+</a>
          </div>
        </div>
      </div>
    );
  }
});

//Component: Cart
let Cart = React.createClass({
  componentDidMount(){
      console.log("Cart Mounting.");
      let content = React.findDOMNode(this.refs.cart__content);
      Ps.initialize(content);
      console.log("perfect-scrollbar loaded.");
  },
  render: function() {
      let children = [];
      for (let item in cartItems) {
       children.push(<CartItem key={cartItems[item].id} cartItem={cartItems[item]}/>);
     }

    return (
    <div className="cart" ref="cart__content">
      <h3 className="cart__title">Shopping Cart (2)</h3>
      {children}
     </div>
    );
  }
});

//Component: CheckOut
let CheckOut = React.createClass({
  render: function() {
    return (
        <div className="checkout">
          <hr className="checkout__divider" />
          <input type="text" className="checkout__coupon-input" placeholder="coupon code : 2333" />
          <p className="checkout__coupon--warning">No such coupon code!</p>
          <div className="checkout__amount">
            <div className="checkout__amount--Discount">
              <div className="checkout__amount--Discount_left">
                Discount
              </div>
              <div className="checkout__amount--Discount_right">
                -$90.02
              </div>
            </div>
            <div className="checkout__amount--Subtotal">
              <div className="checkout__amount--Subtotal_left">
                Subtotal
              </div>
              <div className="checkout__amount--Subtotal_right">
                $450.12
              </div>
            </div>
            <div className="checkout__amount--saving">
              $360.09
            </div>
            <div className="checkout__amount--button__area">
              <div className="checkout__amount--button" href="#">
                <img className="checkout__amount--button--icon" src="img/cart-icon.svg" />
                <div className="checkout__amount--button--text">
                  Checkout
                </div>
              </div>
            </div>
          </div> {/* checkout__amount */}
        </div>
    );
  }
});

let App = React.createClass({
  render: function() {
    return (
      <div className="site">
        <div className="bg">
          <div className="bg__img">
         </div>
        </div>
        <div className="site__main">
          <div className="site__left-sidebar">
             <SiteTitle/>
          </div>
          <div className="site__content">
                <Products/>
          </div> {/* site__content */}
        </div> {/* site__main */}
        <div className="site__right-sidebar">
          <Cart/>
          <CheckOut/>
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
    console.log("app loaded.");
}

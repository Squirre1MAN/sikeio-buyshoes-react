let Product = React.createClass({
  render: function() {
    return (

      <div className="product">
        <div className="product__display">
          <div className="product__img-wrapper">
            <img className="product__img" src="img/shoe1.jpg" />
          </div>
          <a className="product__add">
            <img className="product__add__icon" src="img/cart-icon.svg" />
          </a>
          <div className="product__price">
            $299
          </div>
        </div>
        <div className="product__description">
          <div className="product__name">
            Marana E-Lite
          </div>
          <img className="product__heart" src="img/heart.svg" />
        </div>
      </div> {/* product */}
    );
  }
});


let Products = React.createClass({
    render(){
        let product = {
            name:"Jameson Vulc",
            price:64.99,
            imagePath: "../img/shoes/jameson-vulc-brown-gum-orig.png",
            gender:"man",
        };

        return(
            <div className="products">
                <Product product={product}/>
            </div>
        )
    }
});

React.render(<Products />,document.querySelector("#root"));

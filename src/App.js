import React from 'react';
import Cart from "./Cart";
import Navbar from "./Navebar";

class App extends React.Component{

  
  constructor(){
    super();
    this.state = {
        products:[
            {
                title :'Mobile Phone',
                price : 999,
                qty : 1,
                img : 'https://m.media-amazon.com/images/I/51l-iIutivL._AC_UF1000,1000_QL80_.jpg'  ,
                id: 1,
            },
            {
                title :'Watch',
                price : 99,
                qty : 2,
                img : 'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?cs=srgb&dl=pexels-joey-nguy%E1%BB%85n-2113994.jpg&fm=jpg'  ,
                id: 2,
            },
            {
                title :'Leptop',
                price : 999,
                qty : 1,
                img : 'https://web.s-cdn.boostkit.dev/webaction-files/5ac4f587beef72050ad4e284_product_images/2a7dbfd4-9018-46e5-88d8-7767bad952c4-60fa1d9c67e30f00018f1f0f.png'  ,
                id: 3,
            }
        ]
    }
    //we can also bind here 
    // this.increaseQuantity = this.increaseQuantity.bind(this)
  }

  handleIncreaseQuantity = (product) =>{
      // console.log('heyy increase product quantity' , product)
      const { products } = this.state;
      const index = products.indexOf(product);

      products[index].qty += 1;

      this.setState({
          products : products
      })
  }

  handleDecreaseQuantity = (product) =>{
      //console.log('hay decrease qty ' , product);

      const {products} = this.state;
      const index = products.indexOf(product);

      if(products[index].qty === 0){
          return ;
      }

      products[index].qty -= 1;

      this.setState({
          products : products
      })
  }

  handleDeleteProduct = (id) =>{

      const {products} = this.state;

      const item = products.filter((item) => 
          item.id !== id
      )

      this.setState({
          products :item
      })
  }
  getcartCount = () => {
    const {products} = this.state;

    let count = 0 ;
    products.forEach((item) => {
      count += item.qty;
    })

    return count;
  }

  totalPrice = () => {
    const { products } = this.state;
    
    let cartTotal = 0;
    products.map((product) =>{
      cartTotal = cartTotal + product.qty*product.price;
    })
    
    return cartTotal;
  }

  render(){

    const { products } = this.state;

    return (
      <div className="App">
        {/* <h1> Cart </h1> */}
        <Navbar count={this.getcartCount()} />
        <Cart 
           products = {products}
           onIncreaseQuantity = {this.handleIncreaseQuantity}
           onDecreaseQuantity = {this.handleDecreaseQuantity}
           onDeleteProduct = {this.handleDeleteProduct}
        />

        <div style={{padding: 10 , fontSize: 20}} >Total: {this.totalPrice()} </div>

      </div>

    );
  }
}
  

export default App;

import React from 'react';
import Cart from "./Cart";
import Navbar from "./Navebar";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

class App extends React.Component{

  
  constructor(){
    super();
    this.state = {
      //fetching data through firebase so pproduct is empty;
        products:[],
        //set loder
        loading : true
       
    }
    this.db = firebase.firestore();
    //we can also bind here 
    // this.increaseQuantity = this.increaseQuantity.bind(this)

  }

  componentDidMount(){
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);
    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data());
    //       return doc ;
    //     })

    //     const products = snapshot.docs.map((doc) => {

    //       const data = doc.data();
    //       data['id'] = doc.id;
    //       return data;

    //     })

    //     this.setState({
    //       products : products,
    //       loading:false
    //     })

    //   })

    this.db
      .collection('products')
      .orderBy('price')
      .onSnapshot((snapshot) => {

        //this will print querySnapshot

        // console.log(snapshot);
        
        //querySnap returns a docs in form of array where all data is stored inn form of object

        // snapshot.docs.map((doc) => {
        //   console.log(doc.data())
        //   return doc;
        // });

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();

          data['id'] = doc.id;
          return data;
        })

        this.setState({
          products,
          loading:false,
        })

      })
      
  }

  handleIncreaseQuantity = (product) =>{
      // console.log('heyy increase product quantity' , product)
      const { products } = this.state;
      const index = products.indexOf(product);

      const prodRef = this.db.collection('products').doc(products[index].id);

      prodRef.update({
        qty: products[index].qty + 1
      })
      .then(() => {
        console.log('update sucessfully');
      })
  }

  handleDecreaseQuantity = (product) =>{
      //console.log('hay decrease qty ' , product);

      const {products} = this.state;
      const index = products.indexOf(product);

      if(products[index].qty === 0){
          return ;
      }

      // products[index].qty -= 1;

      // this.setState({
      //     products : products
      // })

      const prodRef = this.db.collection('products').doc(products[index].id);

      prodRef.update({
        qty: products[index].qty - 1
      })
      .then(() => {
        console.log('update sucessfully');
      })
  }

  handleDeleteProduct = (id) =>{

      // const {products} = this.state;

      const prodRef = this.db.collection('products').doc(id);

      prodRef.delete()
      .then(() => {
        console.log('deleted sucessfully');
      })
      // const item = products.filter((item) => 
      //     item.id !== id
      // )

      // this.setState({
      //     products :item
      // })
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
    products.forEach((product) => {
    cartTotal += product.qty * product.price;
  });
  
  return cartTotal;
  }
  

  //check component mount function
  // componentDidMount(){
  //   console.log("component mounted");
  //   // this.setState({value:2})
  // }

  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img : '',
        price:990,
        qty : 2,
        title : 'washing machine'
      })
      .then((docref) => {
        console.log('product has been added' , docref)
      })
      .catch ((error) => {
        console.log('error',error);
      })
  }

  render(){
    
    // console.log('rendeer')
    const { products ,loading } = this.state;

    return (
      <div className="App">
        {/* <h1> Cart </h1> */}
        <Navbar count={this.getcartCount()} />
        <button onClick={this.addProduct} style={{padding: 20 , fontSize:20}}> Add a product </button>
        <Cart 
           products = {products}
           onIncreaseQuantity = {this.handleIncreaseQuantity}
           onDecreaseQuantity = {this.handleDecreaseQuantity}
           onDeleteProduct = {this.handleDeleteProduct}
        />
        {loading && <h1> Loading Products ... </h1> }
        <div style={{padding: 10 , fontSize: 20}} >Total: {this.totalPrice()} </div>

      </div>

    );
  }
}
  

export default App;

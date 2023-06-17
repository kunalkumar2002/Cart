import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{

    constructor(){
        super();
        this.state = {
            products:[
                {
                    title :'Mobile Phone',
                    price : 999,
                    qty : 1,
                    img : ''  ,
                    id: 1,
                },
                {
                    title :'Watch',
                    price : 99,
                    qty : 2,
                    img : ''  ,
                    id: 2,
                },
                {
                    title :'Leptop',
                    price : 999,
                    qty : 1,
                    img : ''  ,
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

    render(){

        const {products} = this.state;

        return (
            <div className="Cart">
                
                {products.map((product) => {
                    return (
                       <CartItem 
                           product={product} 
                           key={product.id}
                           onIncreaseQuantity = {this.handleIncreaseQuantity}
                           onDecreaseQuantity = {this.handleDecreaseQuantity}
                           onDeleteProduct = {this.handleDeleteProduct}
                        />
                    )
                })}
                
            </div>
        )
    }
}

export default Cart;
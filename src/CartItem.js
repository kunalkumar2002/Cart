import React from "react";

const CartItem = (props) => {
    
    // constructor(){
    //     super();
    //     this.state = {
    //         title :'Mobile Phone',
    //         price : 999,
    //         qty : 1,
    //         img : ''
    //     }
    //     //we can also bind here 
    //     // this.increaseQuantity = this.increaseQuantity.bind(this)
    // }

    // increaseQuantity(){
    //     console.log('this',this)
    // }
    //or in place of this we can use arrow function that willl automaticly Bind
     

    // we not need of increment nad decrement function here because we have removed the ststes from 
    // cartItem component and using props 

    // increaseQuantity = () => {
    //     // console.log('this.state' , this.state)

    //     //setState also provide us callback
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty +1
    //         };
    //     }, () => {
    //         console.log(this.state)
    //     });
    // }

    // decreaseQty = () => {
        
    //     const {qty} = this.state;
    //     if(qty === 0){
    //         return ;
    //     }

    //     this.setState((prevState) => {
    //         return {
    //             qty : prevState.qty - 1
    //         }
    //     })
    // }

    // console.log(this.props);

    const {title , price , qty} = props.product;
    //destructure props 
    const { product , onIncreaseQuantity , onDecreaseQuantity , onDeleteProduct } = props;

    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} />
            </div>
            <div className="right-block">
                <div style={{fontSize:20}}>{title}</div>
                <div style={{color:'#777'}}>rs {price}</div>
                <div style={{color:'#777'}}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/*button */} 
                    <img 
                        alt="increase" className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/128/3303/3303893.png"
                        onClick={() => onIncreaseQuantity(product)}
                        // onClick={this.increaseQuantity.bind(this)} 
                    />
                    <img alt="decrease" className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
                        onClick={() => onDecreaseQuantity(product)} 
                    />
                    <img alt="delete" className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                        onClick={() => onDeleteProduct(product.id)}
                    />
                </div>
            </div>
        </div>
    );
    
}

const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;
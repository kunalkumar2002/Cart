import React from "react";

const Navbar = (props) => {
    return  (
        <div style={styles.nav}>
            <div style={styles.cartcontainer}>
                <img style={styles.cartIcon} src="https://img.icons8.com/?size=512&id=CE7rP-35_XQR&format=png" alt="cart-icon"/>
                <span style={styles.cartcount} > {props.count} </span>
            </div>
        </div>
    )

};

const styles = {
    nav:{
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartcontainer:{
        position:'relative' 
    },
    cartIcon:{
        height:30,
        marginRight:20,
        filter: 'invert(100%)'
    },
    cartcount:{
        background: '#00FFFF',
        borderRadius: '50%',
        padding: '4px 10px',
        position: 'absolute',
        right: 2,
        top: -9
        
    }
}

export default Navbar;
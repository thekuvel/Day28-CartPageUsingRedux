import data from "./data.json"
import styles from "./Cart.module.css"
import { useDispatch, useSelector } from "react-redux";

console.log(data.products[0].rating.count)


//Child Component 1
function CartCard() {

    const {cartCount,productPrice} = useSelector(state => state.cartReducer)

    const dispatch = useDispatch();

    console.log("Component 1")

    return (
        <>
        <div className={styles.cart}>
            <div className={styles.productDescription}>
                <span className={styles.imageSpan}>
                    <img src={data.products[0].image} alt="image" />
                </span>
                <div>
                    <h3>{data.products[0].title}</h3>
                    <p>Category: {data.products[0].category}</p>
                    <p>Description: {data.products[0].description}</p>
                </div>
            </div>
            
            <div className={styles.price}>
                <label htmlFor="quantity">Quantity: 
                <p>{cartCount}</p>
                <button className="btn btn-primary" onClick={()=>dispatch({type : "inc"})}>Increase</button>
                <button className="btn btn-primary" onClick={()=>dispatch({type : "dec"})}>Decrease</button>
                </label>
                <h4>Price : {cartCount*productPrice}</h4>
                <span>
                    <button className="btn btn-danger" onClick={()=>dispatch({type : "reset"})}>Remove</button>   
                </span> 
            </div>
        </div>            
        </>
    )
}

//Child Component 2
function CheckOutSection() {
    console.log("Component 2")

    const {cartCount,productPrice} = useSelector(state => state.cartReducer)

    const dispatch = useDispatch();

    return(
        <>

        <hr/>
        <div>
            <span className={styles.flexRowBox}>
                <p>Sub Total</p>
                <p>{cartCount*productPrice}</p>
            </span>
            <span className={styles.flexRowBox}>
                <p>Shipping</p>
                <p>Free</p>
            </span>
        </div>
        <hr/>
        <div  className={styles.flexRowBox}>
            <p>Total</p>
            <p>{cartCount*productPrice}</p>
        </div>
        <div>
            <p>Instock : {data.products[0].rating.count - cartCount}</p>
        </div>

        </>
    )
}


// Parent Component
const Cart = () => {

    console.log("Parent Component")

    return(
        <div className={styles.container}>

            <CartCard/>
            <CheckOutSection/>
            
        </div>
    )
}

export default Cart

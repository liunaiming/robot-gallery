import React,{useContext} from 'react'; 
import styles from './Robot.module.css'
import {appContext,appSetStateContext} from '../AppState';
import {useAddToCart} from './AddToCart'
interface RobotProps {
  id:number,
  name:string,
  email:string,
}

const RobotDiscount : React.FC<RobotProps> = ({id,name,email})=>{
  const value = useContext(appContext)
  const addToCart = useAddToCart()
  // robohash.org
  
  return(

        <div className={styles.cardContainer}>
        <img src={`https://robohash.org/${id}`} alt="robot"/>
        <h2>{name}打折</h2>
        <p>{email}</p> 
        <p>{value.username}</p>
        <button onClick={()=>addToCart(id,name)}>加入购物车</button>
      </div>
  );
  
}
export default RobotDiscount;
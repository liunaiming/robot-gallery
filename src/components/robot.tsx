import React,{useContext} from 'react'; 
import styles from './Robot.module.css'
import {withAddToCart} from './AddToCart'
import {appContext,appSetStateContext} from '../AppState';
export interface RobotProps {
  id:number,
  name:string,
  email:string,
  addToCart:(id,name) =>void
}

const Robot : React.FC<RobotProps> = ({id,name,email,addToCart})=>{
  const value = useContext(appContext)
  const setState = useContext(appSetStateContext)
  // robohash.org

  return(

        <div className={styles.cardContainer}>
        <img src={`https://robohash.org/${id}`} alt="robot"/>
        <h2>{name}</h2>
        <p>{email}</p> 
        <p>{value.username}</p>
        <button onClick={()=>addToCart(id,name)}>加入购物车</button>
      </div>
  );
  
}
export default withAddToCart(Robot);
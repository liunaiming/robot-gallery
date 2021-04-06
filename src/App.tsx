import React, { useState,useEffect } from 'react';
// import './App.css';
import styles from './App.module.css';
// import robots from './mockdata/robots.json'
import Robot from './components/robot'
import logo from "./assets/images/logo.svg"
import ShoppingCart from './components/ShoppingCart'
import RobotDiscount from './components/RobotDiscount';
// const html = "<img onerror='alert(\"Hacked!\")'>"
// const jsHacked = "javascript: console.log('Hacked!');" 
interface Props {
  // username:string
}
const App: React.FC<Props> = (props) => {
  const [count,setcount] = useState<number>(0)
  const [robotGallery,setRobotGallery] = useState<any>([])
  const [loadding,setLoadding] = useState<boolean>(false)
  const [error, setError] = useState<string>()
  useEffect(()=>{
    document.title=`点击${count}`
  })
  useEffect(()=>{
    const fetchData = async ()=>{
      setLoadding(true)
      try{
        const response =  await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json();
        setRobotGallery(data)
      }catch(e){
        setError(e.message)
      }
      setLoadding(false)
    }
    fetchData()
  
    // .then(data =>{
    //   setRobotGallery(data)
    // })
  },[])
  // componentDidMount(){
  //   fetch('https//jsonplaceholder.typicode.com/users')
  //   .then(res=> res.json())
  //   .then((data)=>this.setState({robotGallery:data}))
  // }
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo"/>
        <h1>罗伯特机器人吊炸天online购物平台</h1>

        {/* <h2>{props.username}</h2> */}
        
        </div>
        <ShoppingCart />
        {(!error ||error!=="")&&<div>网站出错:{error}</div>}
        <button
        onClick={()=>{
          setcount(count+1)
        }}
        >
          click
          <span>{count}</span>
        </button>
        {!loadding?
        <div className={styles.robotList}>
        {robotGallery.map((r,index) =>
        index%2==0?
        <RobotDiscount id={r.id} email={r.email} name = {r.name}/>:
        <Robot id={r.id} email={r.email} name = {r.name}/>)}
      </div>
      :<h1>图片正在加载中</h1>

        }
      
      </div>
  
    );

  
}

export default App;

import React from 'react'
import  ReactDOM  from 'react-dom/client'
import data from './../data/data.json'
import { useState } from 'react';

import Logo from './../assets/shared/logo.svg'

const Navbar = ({page , setPage}) => {
    
    let navigations=[]
    let x=1;
for (let key in data ) {
        if (key == page){
            console.log(key , page)
            navigations.push(<li className='active' key={key} onClick={()=>{setPage(key.toLocaleLowerCase())}}><span>0{x}</span>{key.toLocaleUpperCase()}</li>)
        }else{
            console.log(key , page)
            navigations.push(<li  key={key} onClick={()=>{setPage(key.toLocaleLowerCase())}}><span>0{x}</span>{key.toLocaleUpperCase()}</li>)
        }
        x++;
    }
    return (
    <header>
        <img  src={Logo}/>
        <hr/>
        <ul>
            <li onClick={()=>{setPage('home')}} key='home' className={page == 'home'? 'active':''} ><span>00</span>HOME</li>
            {navigations}
        </ul>
        <img className="small "  src='./../assets/shared/icon-hamburger.svg' alt='burger'/>
        <img className="small" src='./../assets/shared/icon-close.svg' alt='close'/>
    </header>
  )
}
export default Navbar

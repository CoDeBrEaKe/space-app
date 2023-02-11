import React from 'react'
import DestCard from './DestCard'
import { useState } from 'react'
import data from './../data/data.json'
import { TransitionGroup , CSSTransition } from 'react-transition-group'

let selectedPlanetData = '';
const Destination = () => {


    const [planet , setPlanet] = useState('moon');
    // console.log(selectedPlanetData)
    let planets=[]
    for (let key in data.destinations) {
        let dest = data.destinations[key].name;
        if (dest.toLocaleLowerCase() == planet.toLocaleLowerCase()){
            planets.push(<li className='active' key={dest} onClick={()=>{setPlanet(dest.toLocaleUpperCase())}}>{dest.toLocaleUpperCase()}</li>)
            selectedPlanetData = data.destinations[key]
          }else{
            
                planets.push(<li  key={dest} onClick={()=>{setPlanet(dest.toLocaleUpperCase())}}>{dest.toLocaleUpperCase()}</li>)
            }
        }
  return (
    <div className='destination'>
      <h2><span>01</span> PICK YOUR DESTINATION</h2>
    <div className='view'>
        <div className='planets'>
            <ul>
            {planets}
            </ul>
            <TransitionGroup component={planet}>
              <CSSTransition 
              timeout={1500}
              classNames="transition">
                <DestCard planet={selectedPlanetData}/>
              </CSSTransition>
            </TransitionGroup>
        </div>
        <TransitionGroup component={planet[0].toLocaleLowerCase()}>
            <CSSTransition timeout={1500}
              classNames="animation">
              <img src={selectedPlanetData.images.png}/>
          </CSSTransition>
          </TransitionGroup>
    </div>
    </div>
  )
}

export default Destination

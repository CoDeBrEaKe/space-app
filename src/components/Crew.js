import React from 'react'
import { useState  ,useRef} from 'react'
import data from './../data/data.json'
import { TransitionGroup , CSSTransition } from 'react-transition-group'
import CrewCards from './CrewCards'

const Crew = () => {

    let selectedMember = '';
    let myList = [];
    const [crewMember , setCrewMember] = useState('Douglas Hurley') 

    for (let key in data.crew) {
        if (data.crew.at(key).name == crewMember){
            selectedMember = data.crew.at(key);
            myList.push(<li className='active' key={selectedMember.name} onClick={()=>{setCrewMember(selectedMember.name)}}></li>)
        }else{
            myList.push(<li key={data.crew.at(key).name} onClick={()=>{setCrewMember(data.crew.at(key).name)}}></li>)

        }
    }

    return (
        
<div className='crew-section'>
    <div className='crew-details'>
        <h2><span>02</span> MEET YOUR CREW</h2>

        <TransitionGroup component={crewMember.slice(0,3)}>
        <CSSTransition
        timeout={1400}
        classNames="animation"
        >
            <CrewCards  selectedMember= {selectedMember}/>  
        </CSSTransition>
    </TransitionGroup>
                
        <ul>
            {myList}
        </ul>
    </div>
    <TransitionGroup component={crewMember.slice(0,3)}>
        <CSSTransition
        timeout={1400}
        classNames="animation"
        >
        <img src={require(`${selectedMember.images.png}`)} alt='member'/>
        </CSSTransition>
    </TransitionGroup>
    </div>
  )
}

export default Crew

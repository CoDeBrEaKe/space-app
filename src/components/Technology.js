
import TechCards from './TechCards'
import React , {useState} from 'react'
import data from './../data/data.json'
import { TransitionGroup , CSSTransition } from 'react-transition-group'
const Technology = () => {

    let selectedTech = '';
    let myList = [];
    const [tech , setTech] = useState('Launch vehicle') 
    let i = 1;
    for (let key in data.technology) {
        if (data.technology.at(key).name == tech){
            selectedTech = data.technology.at(key);
            myList.push(<li className='active' key={selectedTech.name} onClick={()=>{setTech(selectedTech.name)}}>{i}</li>)
        }else{
            myList.push(<li key={data.technology.at(key).name} onClick={()=>{setTech(data.technology.at(key).name)}}>{i}</li>)

        }
        i++
    }

  return (
    <div className='tech-section'>
          <div className='tech-details'>
        <h2><span>03</span> SPACE LAUNCH 101</h2>
    <div className='horizontal'>

        <TransitionGroup component={tech.slice(0,2)}>
        <CSSTransition
        timeout={1400}
        classNames="transition"
        >
            <TechCards  selectedTech= {selectedTech}/>  
        </CSSTransition>
    </TransitionGroup>
                
        <ul>
            {myList}
        </ul>
        </div>
    </div>


    <TransitionGroup component={tech.slice(7,8)}>
        <CSSTransition
        timeout={1400}
        classNames="animation"
        >
        <img src={window.innerWidth < 992 ?  require(`${selectedTech.images.landscape}`): require(`${selectedTech.images.portrait}`)} alt='member'/>
        </CSSTransition>
    </TransitionGroup>
    </div>
  )
}

export default Technology

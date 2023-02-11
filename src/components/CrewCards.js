import React from 'react'
import { TransitionGroup , CSSTransition } from 'react-transition-group'
const CrewCards = ({selectedMember}) => {
    return (
        
    <div>
        <h3>{selectedMember.role.toUpperCase()}</h3>
        <h3>{selectedMember.name.toUpperCase()}</h3>
        <p>{selectedMember.bio}</p>
    </div>
  )
}

export default CrewCards

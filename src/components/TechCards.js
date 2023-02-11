import React , {useState} from 'react'
const TechCards = ({selectedTech}) => {
  return (
    <div>
        <p>THE TERMINOLOGY…</p>
        <h3>{selectedTech.name.toUpperCase()}</h3>
        <h3>{selectedTech.description.toUpperCase()}</h3>
        
    </div>
  )
}

export default TechCards

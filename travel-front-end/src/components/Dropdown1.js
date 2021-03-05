import React from 'react'
// import { Dropdown } from 'semantic-ui-react'


function Dropdown1({ option, setOption, handleSafeWater, handleVaccinations }) {


  return (
    <div className="dropdown">
     <label>Choose an option:</label>
      <select value={option} onChange={(e) => {setOption(e.target.value)}}>
        <option value="All">All</option>
        <option value="Vaccinations">Vaccinations</option>
        <option value="Safe Drinking Water">Safe Drinking Water</option>
      </select>
    </div>
  )
}



export default Dropdown1;

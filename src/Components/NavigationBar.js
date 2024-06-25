import React from 'react'
import '../Styles/NavigationBar.css'
import { useNavigate } from 'react-router-dom';
function NavigationBar() {
  const navigate = useNavigate()

  const navigateHandler = (name)=>{
    
    navigate(`/result`)
  }

  return (
    <div className="footer">
      <div className="footer-button" onClick={navigateHandler}>Submit</div>
    </div>  )
}

export default NavigationBar
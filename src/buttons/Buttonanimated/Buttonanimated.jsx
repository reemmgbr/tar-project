import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Buttonanimated.css';

export default function Buttonanimated() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); 
  };

  return (
    <div>
      <button 
        className="button" 
        data-text="Awesome"
        onClick={handleClick}
      >
        <span className="actual-text">&nbsp;REEM&nbsp;</span>
        <span aria-hidden="true" className="hover-text">&nbsp;REEM&nbsp;</span>
      </button>
    </div>
  );
}

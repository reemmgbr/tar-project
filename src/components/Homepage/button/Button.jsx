import React from 'react';
import './button.css'; 


export default function Button({cusotmStyle = "dark", btnVairant = "dark"}) {
  return (
<button className={`learn-more ${cusotmStyle}`}>
  <span className="circle" aria-hidden="true">
  <span className="icon arrow"></span>
  </span>
  <span className={`button-text ${btnVairant}`}>Learn More</span>
</button>
  );
}
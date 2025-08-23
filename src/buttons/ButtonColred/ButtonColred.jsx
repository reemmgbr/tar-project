import React from 'react'
import './ButtonColred.css';

export default function ButtonColred() {
  return (
<div class="button-group">
  <button class="darkmatter-btn">
    Engage
    <div
      class="darkmatter-particle"
      style="--tx: -20px; --ty: -15px; left: 25%; top: 25%;"
    ></div>
    <div
      class="darkmatter-particle"
      style="--tx: 15px; --ty: -20px; left: 75%; top: 25%; animation-delay: 0.2s;"
    ></div>
    <div
      class="darkmatter-particle"
      style="--tx: -15px; --ty: 15px; left: 25%; top: 75%; animation-delay: 0.4s;"
    ></div>
    <div
      class="darkmatter-particle"
      style="--tx: 20px; --ty: 15px; left: 75%; top: 75%; animation-delay: 0.6s;"
    ></div>
  </button>
</div>

  )
}

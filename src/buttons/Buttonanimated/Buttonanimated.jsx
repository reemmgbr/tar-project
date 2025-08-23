import React from 'react'
import './Buttonanimated.css'; 
export default function Buttonanimated() {
  return (
    <div>
<button class="button" data-text="Awesome">
    <span class="actual-text">&nbsp;REEM&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;REEM&nbsp;</span>
</button>
    </div>
  )
}

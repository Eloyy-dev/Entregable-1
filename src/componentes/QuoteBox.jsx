import text from '../text.json'
import '../App.css'
import { useState } from 'react'
import Text from './Text';

const colors = ["#F9F871", "#FFC94E", "#FF964D", "#FF6062", "#F92680", "#C600A1", "#008FE7"];


function QuoteBox() {
  
  const [num, setNum] = useState(Math.floor(Math.random() * colors.length));
  const randomColor = Math.floor(Math.random() * colors.length);
  
  
  const change = () => {
    setNum(randomColor);
  }
  
  
  document.body.style = `background: ${colors[num]}`
  return (
    <div className='container'>

      <Text number = {num} array= {colors}/>

      <p style={{color: `${colors[num]}`}}>Author:{text[num].author}</p>

      <div className='btn' onClick={change}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="15" y1="16" x2="19" y2="12" />
          <line x1="15" y1="8" x2="19" y2="12" />
        </svg>
      </div>

    </div>
  )
}


export default QuoteBox;
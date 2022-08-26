import '../App.css'
import { useState } from 'react'
import text from '../text.json'

function Text ({number, array}){
  return(
    <p style={{color: `${array[number]}`}}>"{text[number].quote}"</p>
  )
}
export default Text;
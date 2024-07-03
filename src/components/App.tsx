import React, {useState} from 'react'
import './App.scss'

export const App:React.FunctionComponent = () => {
    const [coutn, setCount] = useState(0);

    const handleClick = () => {
        setCount(val => val + 1)
    }

  return (<div className='hellow'>
    App teest number {coutn}
    <div>
        <button onClick={handleClick}>Click</button>
    </div>
  </div>)
}
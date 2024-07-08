import React, {useState} from 'react';
import { Outlet } from "react-router-dom";

import * as styles from './App.module.scss';

export const App:React.FunctionComponent = () => {
    const [coutn, setCount] = useState(0);

    const handleClick = () => {
        setCount(val => val + 1)
    }

  return (<div className={styles.hellow}>
    App teest number {coutn}
    <div>
        <button onClick={handleClick}>Click</button>
    </div>
    <Outlet />
  </div>)
}
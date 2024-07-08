import React, {useState} from 'react';
import { Outlet } from "react-router-dom";
import Png from '@/assets/png.png';
import Jpg from '@/assets/icon.jpg';
import SVG from '@/assets/svg.svg';

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
    <br />
    <div>
      <img src={Png} alt="baterfly" width={300} height={200} />
    </div>
    <br />
    <div>
      <img src={Jpg} alt="cat" width={300} height={200} />
    </div>
    <br />
    <div>
      <SVG width={300} height={300} fill={'red'}/>
    </div>
    <br />
    <Outlet />
  </div>)
}
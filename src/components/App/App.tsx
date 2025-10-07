import React, {useEffect, useState} from 'react';
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

    const TODO = (n: number) => n;

    useEffect(() => {
      TODO(1223) // проверка работы этого плагина ForkTsCheckerWebpackPlugin - просто передать строку
    }, [])

  return (<div className={styles.text}>
    <p className={styles.info}>ENV={__ENV__}</p>
    <p className={styles.info}>PLATFORM={__PLATFORM__}</p>
    <p>App teest number {coutn}</p>
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
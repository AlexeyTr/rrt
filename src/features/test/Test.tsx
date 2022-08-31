import React, { useState } from "react";

import { click, superClick, asyncAction } from "./testSlice";
import styles from './Test.module.css';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {RootState} from "../../app/store";

export function Test() {
    const value = useAppSelector((state : RootState) => state.test.value);
    const dispatch = useAppDispatch();

    return (
        <div>
            {value}
            <button onClick={() => dispatch(click())} className={styles.asyncButton}>click</button>
            <button onClick={() => dispatch(superClick(10))} className={styles.asyncButton}>super click</button>
            <button onClick={() => dispatch(asyncAction())} className={styles.asyncButton}>super click</button>
        </div>
    )
}
import React, { useState } from "react";

import { click, superClick, asyncAction } from "./testSlice";
import styles from './Test.module.css';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {RootState} from "../../app/store";

export function Test() {
    const value = useAppSelector((state : RootState) => state.test.value);
    const securities = useAppSelector((state) => state.test.securities);
    const marketData = useAppSelector((state) => state.test.marketData);
    const dispatch = useAppDispatch();

    return (
        <div style={{width: '100%'}}>
            {value}
            <button onClick={() => dispatch(click())} className={styles.asyncButton}>click</button>
            <button onClick={() => dispatch(superClick(10))} className={styles.asyncButton}>super click</button>
            <button onClick={() => dispatch(asyncAction())} className={styles.asyncButton}>super click</button>
            <hr/>
            <div className={styles.wrap}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            {
                                securities.columns.map((col, ind) => <th key={ind}>{col}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                    {
                        securities.data.map((row, ind) =>
                            <tr key={ind}>
                                {
                                    row.map((col, idx) => <td key={idx}>{col}</td>)
                                }
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
            <ul>
               {/* {
                    rows.map((row, ind) => <li key={ind}>{row[2] + ' ' + row[5] + ' (min = ' + row[7] + ' max = ' + row[8] + ')'}</li>)
                }*/}
            </ul>
        </div>
    )
}
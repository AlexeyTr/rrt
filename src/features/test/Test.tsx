import React from "react";

import {asyncAction, click, superClick} from "./testSlice";
import styles from './Test.module.css';
import {useAppDispatch} from "../../app/hooks";
import {MarketTable} from "./MarketTable";
import {MarketCards} from "./MarketCards";
import {SecuritiesInfo} from "./SecuritiesInfo";
import {SimplePanel} from "../../components/SimplePanel";

export function Test() {
    const dispatch = useAppDispatch();

    const loadProps = {securities: ['GAZP', 'SBER', 'LKOH', 'ROSN', 'CHMF', 'YNDX', 'POLY', 'NVTK', 'NLMK', 'MAGN', 'ALRS', 'HHRU']}

    return (
        <div style={{textAlign: 'left', padding: '1rem'}}>
            <button onClick={() => dispatch(click())} className={styles.asyncButton}>click</button>
            <button onClick={() => dispatch(superClick(10))} className={styles.asyncButton}>super click</button>
            <button onClick={() => dispatch(asyncAction(loadProps))} className={styles.asyncButton}>super click</button>

            <MarketCards/>

            <SimplePanel title={"Информация об акциях"} open={false}>
                <SecuritiesInfo/>
            </SimplePanel>

            <SimplePanel title={"Табличное представление"} open={false}>
                <MarketTable/>
            </SimplePanel>
        </div>
    );
}
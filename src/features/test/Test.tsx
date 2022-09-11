import React from "react";

import { asyncAction } from "./testSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {MarketTable} from "./MarketTable";
import {MarketCards} from "./MarketCards";
import {SecuritiesInfo} from "./SecuritiesInfo";
import {SimplePanel} from "../../components/SimplePanel";
import {Button, Space, Spin} from "antd";
import styles from './Test.module.css'

export function Test() {
    const dispatch = useAppDispatch();
    const loaded = useAppSelector(state => state.test.loaded);

    const loadProps = {securities: ['GAZP', 'SBER', 'LKOH', 'ROSN', 'CHMF', 'YNDX', 'POLY', 'NVTK', 'NLMK', 'MAGN', 'ALRS', 'HHRU']}

    return (
        <div className={styles.root}>
            <div className={styles.loadButton}>
                <Button onClick={() => dispatch(asyncAction(loadProps))} type="ghost" size="large">
                    Загрузить
                </Button>
            </div>

            <Spin spinning={loaded}>
                <MarketCards/>
            </Spin>

            <SimplePanel title={"Информация об акциях"} open={false}>
                <SecuritiesInfo/>
            </SimplePanel>

            <SimplePanel title={"Табличное представление"} open={false}>
                <MarketTable/>
            </SimplePanel>
        </div>
    );
}
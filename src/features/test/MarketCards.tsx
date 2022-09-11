import React from "react";
import styles from './Test.module.css';
import {useAppSelector} from "../../app/hooks";
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const columnNames = ['SECID', 'BID', 'OPEN', 'LOW', 'HIGH', 'LAST', 'SYSTIME'];

export function MarketCards() {
    const marketData = useAppSelector((state) => state.test.marketData);
    const assets = useAppSelector(state => state.test.assets);

    const colIndexes = columnNames.map(name => marketData.columns.indexOf(name));

    const marketRows = marketData.data.map(row => ({
        ...columnNames
            .map((name, ind) => ({[name]: row[colIndexes[ind]]}))
            .reduce((acc, it) => ({...acc, ...it}), {})
    }));

    const rows = assets.map(asset => {
        const row = marketRows.find(row => row['SECID'] === asset.name);
        return {
            name: asset.name,
            title: asset.title,
            avg: asset.value,
            high: row?.HIGH,
            low: row?.LOW,
            open: row?.OPEN,
            last: row?.LAST,
            systime: row?.SYSTIME,
        }
    });

    return (
        <div className={styles.cardGroup}>
            {
                rows.map(row => <Card key={row.name} {...row}/>)
            }
        </div>
    )
}

function Card(props : {name?: string, title: string, avg ?: number, last ?: number, high ?: number, low ?: number, open ?: number}) {
    const { title, avg = 0, last = 0, high = 0, low = 0, open = 0 } = props;

    const above = avg < last;

    return (
        <div className={`${styles.card} ${above ? styles.above : styles.below}`}>
            <div className={styles.cardHeader}>
                <span>
                    {title}
                    {
                        above ? <ArrowUpOutlined style={{color: 'green'}}/> : <ArrowDownOutlined size={10} style={{color: 'red'}}/>
                    }
                </span>
            </div>
            <div className={styles.cardBody}>
                <span>Мое среднее: {avg}</span>
                <span>Последнее: {last}</span>
                <span>Мин: {low}</span>
                <span>Макс: {high}</span>
                <span>Открытие: {open}</span>
            </div>
        </div>
    )
}
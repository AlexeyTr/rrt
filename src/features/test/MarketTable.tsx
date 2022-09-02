import React from "react";
import styles from "./Test.module.css";
import {useAppSelector} from "../../app/hooks";
import {Asset} from "./testSlice";

const columnNames = ['SECID', 'BID', 'OPEN', 'LOW', 'HIGH', 'LAST', 'SYSTIME'];

export function MarketTable() {
    const marketData = useAppSelector((state) => state.test.marketData);
    const assets = useAppSelector(state => state.test.assets);

    const colIndexes = columnNames.map(name => marketData.columns.indexOf(name));

    return (
        <div className={styles.wrap}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Наименование</th>
                    <th>Мое среднее</th>
                    <th>BID</th>
                    <th>Открытие</th>
                    <th>Мин.</th>
                    <th>Макс.</th>
                    <th>Последнее</th>
                    <th>Время запроса</th>
                </tr>
                </thead>
                <tbody>
                {
                    marketData.data.map((row) => <MarketDataRow row={row} colIndexes={colIndexes} assets={assets}/>)
                }
                </tbody>
            </table>
        </div>
    )
}

function MarketDataRow(props : {row : Array<any>, colIndexes : number[], assets: Array<Asset>}) {
    const { row, colIndexes, assets } = props;

    const secid = row[colIndexes[0]];
    const asset = assets.find(asset => asset.name === secid);

    return (
        <tr>
            <td>{asset?.name}</td>
            <td>{asset?.value}</td>
            {
                colIndexes.slice(1).map(col => <td key={col}>{row[col]}</td>)
            }
        </tr>
    )
}
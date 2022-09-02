import React from "react";
import styles from "./Test.module.css";
import {useAppSelector} from "../../app/hooks";

export function SecuritiesInfo() {
    const securities = useAppSelector((state) => state.test.securities);

    return (
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
    )
}
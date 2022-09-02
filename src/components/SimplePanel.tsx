import React, {useState} from "react";
import styles from './SimplePanel.module.css';

type Props = {
    open?: boolean,
    title: string,
    children?: JSX.Element | JSX.Element[],
}


export const SimplePanel: React.FC<Props> = ({
    open = true, title, children,
                                             }) => {
    const [show, onClick] = useState(open);

    return (
        <div className={styles.simplePanel}>
            <div className={styles.simplePanelHeader} onClick={() => onClick(!show)}>
                {title}
            </div>
            {
                show ? <div className={styles.simplePanelBody}>{children}</div> : null
            }
        </div>
    );
}

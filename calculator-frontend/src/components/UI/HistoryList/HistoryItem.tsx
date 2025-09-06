import React from "react"
import styles from "./HistoryItem.module.scss"
import { HistoryItemButton } from "../Buttons/HistoryItemButton/HistoryItemButton";

type Props = {
    closeHistory: () => void
    setExpr: (expr: string) => void
    expr: string,
    result: string
}

const HistoryItem = (props: Props) => {
    return (
        <div>
            <HistoryItemButton onClick={() => {props.closeHistory(); props.setExpr(props.expr)}}>
                <div className={styles.calculation}>
                    <div className={styles.expr}>
                        {props.expr}
                    </div>
                    <div className={styles.result}>
                        {props.result}
                    </div>
                </div>
            </HistoryItemButton>
        </div>
    )
}

export default HistoryItem;
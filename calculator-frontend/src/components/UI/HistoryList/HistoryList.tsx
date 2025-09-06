import React, { useEffect, useState } from "react";
import HistoryItem from "./HistoryItem";
import CalculateService from "@/API/CalculateService";
import styles from "./HistoryListSlider.module.scss"

type Props = {
    closeHistory: () => void
    setExpr: (expr: string) => void
}

interface HistoryItem {
    expr: string;
    res: string;
}

const HistoryList = (props: Props) => {
    const [historyItems, setHistoryItems] = useState <HistoryItem[]>()

    useEffect(() => {
        const fetchHistory = async () => {
            const history = await CalculateService.getHistory();
            setHistoryItems(history.data.history);
            console.log(historyItems);
        };
        fetchHistory();
    }, []);

    return (
        <div className={styles.scrollerContainer}>
            <div className={styles.scrollerContent}>
                {historyItems?.map((item) => <HistoryItem expr={item.expr} result={item.res} closeHistory={props.closeHistory} setExpr={props.setExpr}/>)}
            </div>
        </div>
    )
}

export default HistoryList;
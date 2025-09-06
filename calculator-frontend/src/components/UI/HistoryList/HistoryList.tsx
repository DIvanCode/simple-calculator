import React, { useEffect, useState } from "react";
import HistoryItem from "./HistoryItem";
import CalculateService from "@/API/CalculateService";

type Props = {}

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
        <div>
            {historyItems?.map((item) => <HistoryItem expr={item.expr} result={item.res} />)}
        </div>
    )
}

export default HistoryList;
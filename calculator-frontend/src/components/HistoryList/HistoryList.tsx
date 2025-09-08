import { useEffect, useState } from 'react';
import HistoryItem from '../HistoryItem/HistoryItem';
import CalculateService from '@/API/CalculateService';
import styles from './HistoryListSlider.module.scss';
import Loader from '../UI/Loader/Loader';
import { HistoryItemType, HistoryResponse } from '@/types';
import { EmptyHistory } from '../EmptyHistory/EmptyHistory';
import { AxiosError } from 'axios';

type Props = {
  closeHistory: () => void;
  setExpr: (expr: string) => void;
};

const HistoryList = (props: Props) => {
  const [historyItems, setHistoryItems] = useState<HistoryItemType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setLoading(true);
        const history: HistoryResponse = await CalculateService.getHistory();
        setHistoryItems(history.data ?? []);
      } catch (error) {
        alert(error instanceof AxiosError ? error.response?.data : error);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className={styles.scrollerContainer}>
      <div className={styles.scrollerContent}>
        {loading ? (
          <Loader />
        ) : historyItems.length === 0 ? (
          <EmptyHistory />
        ) : (
          historyItems.map((item, index) => (
            <HistoryItem
              expr={item.expr}
              result={item.res}
              closeHistory={props.closeHistory}
              setExpr={props.setExpr}
              key={index}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HistoryList;

import { useEffect, useState } from 'react';
import HistoryItem from './HistoryItem';
import CalculateService from '@/API/CalculateService';
import styles from './HistoryListSlider.module.scss';
import Loader from '../UI/Loader/Loader';

type Props = {
  closeHistory: () => void;
  setExpr: (expr: string) => void;
};

interface HistoryItem {
  expr: string;
  res: string;
}

const HistoryList = (props: Props) => {
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setLoading(true);
        const history = await CalculateService.getHistory();
        setHistoryItems(history.data.history);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.scrollerContainer}>
      <div className={styles.scrollerContent}>
        {historyItems?.map((item, index) => (
          <HistoryItem
            expr={item.expr}
            result={item.res}
            closeHistory={props.closeHistory}
            setExpr={props.setExpr}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default HistoryList;

import { HistoryToggleOff } from '../UI/Icons/HistoryToggleOff';
import styles from './EmptyHistory.module.scss';

export const EmptyHistory = () => {
  return (
    <div className={styles.emptyHistory}>
      <HistoryToggleOff />
      <p>{'В истории нет записей'}</p>
    </div>
  );
};

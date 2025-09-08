import styles from './HistoryItem.module.scss';

type Props = {
  closeHistory: () => void;
  setExpr: (expr: string) => void;
  expr: string;
  result: string;
};

const HistoryItem = (props: Props) => {
  return (
    <div
      className={styles.historyItem}
      onClick={() => {
        props.closeHistory();
        props.setExpr(props.expr);
      }}
    >
      <div className={styles.calculation}>
        <div className={styles.expr}>{props.expr}</div>
        <div className={styles.result}>{props.result}</div>
      </div>
    </div>
  );
};

export default HistoryItem;

import { ChangeEventHandler } from 'react';
import styles from './ExprInput.module.css';

type Props = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
export const ExprInput = ({ value, onChange }: Props) => {
  return (
    <input
      id="exprInput"
      type="text"
      className={styles.exprInput}
      value={value}
      onChange={onChange}
    />
  );
};

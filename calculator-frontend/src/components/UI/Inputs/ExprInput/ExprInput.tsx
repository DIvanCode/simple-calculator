import { ChangeEventHandler } from 'react';
import styles from './ExprInput.module.scss';

type Props = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
export const ExprInput = ({ value, onChange }: Props) => {
  return (
    <input
      id="exprInput"
      type="text"
      autoComplete="off"
      className={styles.exprInput}
      value={value}
      onChange={onChange}
    />
  );
};

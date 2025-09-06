import { ComponentPropsWithoutRef } from 'react';
import styles from './HistoryItemButton.module.scss';

type Props = ComponentPropsWithoutRef<'button'>;

export const HistoryItemButton = (props: Props) => {
  return (
    <button type="button" className={styles.historyItemButton} {...props} />
  );
};

import { ComponentPropsWithoutRef } from 'react';
import styles from './IconButton.module.scss';

type Props = ComponentPropsWithoutRef<'button'>;

export const IconButton = (props: Props) => {
  return <button type="button" className={styles.iconButton} {...props} />;
};

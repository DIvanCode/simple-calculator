import { PropsWithChildren } from 'react';
import styles from './Layout.module.scss';

export const Layout = ({ children }: PropsWithChildren) => {
  return <main className={styles.wrapper}>{children}</main>;
};

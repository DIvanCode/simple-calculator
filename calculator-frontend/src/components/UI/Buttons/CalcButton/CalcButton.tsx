import { ComponentPropsWithoutRef } from 'react';
import styles from './CalcButton.module.scss';

type Props = ComponentPropsWithoutRef<'button'> & {
  variant?: 'default' | 'primary' | 'accent';
};

export const CalcButton = ({
  variant = 'default',
  className,
  ...props
}: Props) => {
  return (
    <button
      type="button"
      className={[styles.calcButton, styles[variant], className].join(' ')}
      {...props}
    />
  );
};

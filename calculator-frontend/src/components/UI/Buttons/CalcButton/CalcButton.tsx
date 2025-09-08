import { ComponentPropsWithoutRef } from 'react';
import styles from './CalcButton.module.scss';
import { ButtonVariant } from '@/types';

type Props = ComponentPropsWithoutRef<'button'> & {
  variant?: ButtonVariant;
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

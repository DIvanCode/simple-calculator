import { Dispatch, SetStateAction } from 'react';
import { CalcButton } from '../UI/Buttons/CalcButton/CalcButton';
import styles from './CalcButtonsGrid.module.scss';
import React from 'react';

type Props = {
  setExpr: Dispatch<SetStateAction<string>>;
};

const CalcButtonsGridComponent = ({ setExpr }: Props) => {
  const handleClick = (arithmeticSymbol: string) => {
    setExpr((prev) => (arithmeticSymbol ? prev + arithmeticSymbol : ''));
  };

  return (
    <section className={styles.calcButtonsGrid}>
      <CalcButton onClick={() => handleClick('')}>{'AC'}</CalcButton>
      <CalcButton onClick={() => handleClick('(')}>{'('}</CalcButton>
      <CalcButton onClick={() => handleClick(')')}>{')'}</CalcButton>
      <CalcButton variant="primary" onClick={() => handleClick('%')}>
        <code>MOD</code>
      </CalcButton>

      <CalcButton onClick={() => handleClick('7')}>{'7'}</CalcButton>
      <CalcButton onClick={() => handleClick('8')}>{'8'}</CalcButton>
      <CalcButton onClick={() => handleClick('9')}>{'9'}</CalcButton>
      <CalcButton variant="primary" onClick={() => handleClick('/')}>
        {'\u00F7'}
      </CalcButton>

      <CalcButton onClick={() => handleClick('4')}>{'4'}</CalcButton>
      <CalcButton onClick={() => handleClick('5')}>{'5'}</CalcButton>
      <CalcButton onClick={() => handleClick('6')}>{'6'}</CalcButton>
      <CalcButton variant="primary" onClick={() => handleClick('*')}>
        {'\u00D7'}
      </CalcButton>

      <CalcButton onClick={() => handleClick('1')}>{'1'}</CalcButton>
      <CalcButton onClick={() => handleClick('2')}>{'2'}</CalcButton>
      <CalcButton onClick={() => handleClick('3')}>{'3'}</CalcButton>
      <CalcButton variant="primary" onClick={() => handleClick('-')}>
        {'-'}
      </CalcButton>

      <CalcButton onClick={() => handleClick('.')}>{'.'}</CalcButton>
      <CalcButton onClick={() => handleClick('0')}>{'0'}</CalcButton>

      <CalcButton variant="accent" type="submit">
        {'='}
      </CalcButton>
      <CalcButton variant="primary" onClick={() => handleClick('+')}>
        {'+'}
      </CalcButton>
    </section>
  );
};

export const CalcButtonsGrid = React.memo(CalcButtonsGridComponent);

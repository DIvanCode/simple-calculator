import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  FormEvent,
  FormEventHandler,
  SetStateAction,
  useRef,
  useState,
} from 'react';
import { History } from '../UI/Icons/History';
import styles from './Calculator.module.scss';
import { IconButton } from '../UI/Buttons/IconButton/IconButton';
import { CalcButtonsGrid } from '../CalcButtonsGrid/CalcButtonsGrid';
import { ExprInput } from '../UI/Inputs/ExprInput/ExprInput';
import CalculateService from '@/API/CalculateService';

type Props = {
  expr: string;
  setExpr: Dispatch<SetStateAction<string>>;
  onHistoryClick: () => void;
};

export const Calculator = ({ expr, setExpr, onHistoryClick }: Props) => {
  const calcFormRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (!expr || loading) return;

    setLoading(true);
    CalculateService.calculate(expr)
      .then((response) => setExpr(response.data.res))
      .catch((err) => alert(err.message))
      .finally(() => setLoading(false));
  };

  const handleExprInputChange: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (loading) return;

    const value = event.target.value;

    if (value.charAt(value.length - 1) === '=') {
      calcFormRef.current?.requestSubmit();
    }

    const regex = /^[0-9+\-*/()]*$/;
    if (regex.test(value)) {
      setExpr(value);
    }
  };

  return (
    <form className={styles.calc} onSubmit={handleSubmit} ref={calcFormRef}>
      <header>
        <IconButton onClick={onHistoryClick}>
          <History />
        </IconButton>
      </header>
      <ExprInput
        value={loading ? '...' : expr}
        onChange={handleExprInputChange}
      />
      <hr className={styles.divider} />
      <CalcButtonsGrid setExpr={setExpr} />
    </form>
  );
};

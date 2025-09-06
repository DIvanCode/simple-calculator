import { useState } from 'react';
import './global.scss';
import { Layout } from './components/Layout/Layout';
import { CalcHistory } from './components/CalcHistory/CalcHistory';
import { Calculator } from './components/Calculator/Calculator';

export const App = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [expr, setExpr] = useState('');

  return (
    <Layout>
      {isHistoryOpen ? (
        <CalcHistory closeHistory={() => setIsHistoryOpen(false)} />
      ) : (
        <Calculator
          onHistoryClick={() => setIsHistoryOpen(true)}
          expr={expr}
          setExpr={setExpr}
        />
      )}
    </Layout>
  );
};

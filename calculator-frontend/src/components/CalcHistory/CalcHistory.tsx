import { IconButton } from "../UI/Buttons/IconButton/IconButton";
import HistoryList from "../UI/HistoryList/HistoryList";
import { ArrowBack } from "../UI/Icons/ArrowBack";

type Props = {
  closeHistory: () => void
};

export const CalcHistory = (props: Props) => {
  return (
    <div>
      <header>
        <IconButton onClick={props.closeHistory}>
          <ArrowBack />
        </IconButton>
      </header>

      <HistoryList />
    </div>
  );
};

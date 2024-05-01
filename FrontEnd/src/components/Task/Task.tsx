import { Span } from "next/dist/trace";
import { FormCheckbox } from "../Form/FormCheckbox";
import Styles from "./Task.module.css";

type TaskProps = {
  children: React.ReactNode;
  category: string;
  dateToDo: string;
  isDone: boolean;
};

export function Task({ children, category, dateToDo, isDone }: TaskProps) {
  return (
    <div className={Styles.task}>
      <div className="flex gap-x-[15px]">
        <FormCheckbox isDone={isDone} />
        <p>{children}</p>
      </div>

      <div className={Styles.props}>
        <div>{category}</div>
        <div>{dateToDo}</div>
      </div>
    </div>
  );
}

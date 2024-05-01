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
      <div className="flex">
        <FormCheckbox isDone={isDone} />
        <span>{children}</span>
      </div>

      <div className={Styles.props}>
        <div className="flex">{category}</div>
        <div className="break-keep">{dateToDo}</div>
      </div>
    </div>
  );
}

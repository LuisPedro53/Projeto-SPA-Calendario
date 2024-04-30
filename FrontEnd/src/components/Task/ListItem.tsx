import Styles from "./ListItem.module.css";

type ListItemProps = {
  children: React.ReactNode;
  category: string;
  dateToDo: string;
  isDone: boolean;
};

export function ListItem({
  children,
  category,
  dateToDo,
  isDone,
}: ListItemProps) {
  return (
    <>
      <input type="checkbox" defaultChecked={isDone} />
      <div>{children}</div>
      <div>
        <div>{category}</div>
        <div>{dateToDo}</div>
      </div>
    </>
  );
}

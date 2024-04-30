import Styles from "./sidebar.module.css";
import Menu from "@/components/Menu/Menu";

export function Sidebar() {
  return (
    <div className={Styles.sidebar}>
      MyTask
      <Menu />
    </div>
  );
}

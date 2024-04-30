import { Sidebar } from "@/components/Sidebar";
import Styles from "./main.module.css";

export default function IndexMain() {
  return (
    <main className={Styles.main}>
      <div className={Styles.containerApp}>
        <Sidebar />
        <div className="p-7">Hoje</div>
      </div>
    </main>
  );
}

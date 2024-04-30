import Styles from "./InputTask.module.css";
import { useState } from "react";

export function InputTask() {
  const [teste, setTeste] = useState("");

  const handleAddTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("Input Enter:", teste);
      setTeste("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeste(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        className={Styles.input}
        value={teste}
        onChange={handleChange}
        onKeyDown={handleAddTask}
        placeholder="+ Adicione uma tarefa a lista. Pressione Enter para salvar"
      />
    </>
  );
}

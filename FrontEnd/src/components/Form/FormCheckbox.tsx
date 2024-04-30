import Styles from "./FormCheckbox.module.css";

import { useState } from "react";

export function FormCheckbox({ isDone }: { isDone: boolean }) {
  const [checked, setChecked] = useState(isDone);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex cursor-pointer" onClick={handleClick}>
      <div className={`${Styles.checkbox} ${checked ? Styles.checked : ""}`}>
        <span></span>
        <input type="checkbox" defaultChecked={isDone} />
      </div>
    </div>
  );
}

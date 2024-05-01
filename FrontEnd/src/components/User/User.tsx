import Stlyes from "./User.module.css";

import Image from "next/image";

export function User() {
  return (
    <div className={Stlyes.user}>
      <span>
        <Image src="" width={70} height={70} alt="" />
      </span>
      <p>Bia Silva</p>
    </div>
  );
}

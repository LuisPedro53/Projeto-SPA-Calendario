import MenuItem from "./MenuItem";

export default function MainMenu() {
  return (
    <div>
      <MenuItem icon="hoje" counter={2}>
        Hoje
      </MenuItem>

      <MenuItem icon="amanha" counter={2}>
        Amanhã
      </MenuItem>

      <MenuItem icon="7dias" counter={2}>
        7 Dias
      </MenuItem>
    </div>
  );
}

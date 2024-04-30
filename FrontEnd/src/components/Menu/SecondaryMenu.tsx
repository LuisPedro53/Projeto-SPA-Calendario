import { ItemMenu } from "./ItemMenu";

export function SecondaryMenu() {
  return (
    <div>
      <ItemMenu counter={3}>Categoria A</ItemMenu>
      <ItemMenu counter={2}>Categoria B</ItemMenu>
      <ItemMenu counter={5}>Categoria C</ItemMenu>
    </div>
  );
}

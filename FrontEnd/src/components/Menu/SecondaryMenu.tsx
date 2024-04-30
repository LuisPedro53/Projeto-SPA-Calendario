import { ItemMenu } from "./ItemMenu";

export function SecondaryMenu() {
  return (
    <div>
      <ItemMenu icon="Menu" counter={3}>
        Categoria A
      </ItemMenu>
      <ItemMenu icon="Menu" counter={2}>
        Categoria B
      </ItemMenu>
      <ItemMenu icon="Menu" counter={5}>
        Categoria C
      </ItemMenu>
    </div>
  );
}

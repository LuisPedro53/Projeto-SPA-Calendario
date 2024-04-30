export default function MenuItem({ children, icon, counter }: MenuItemProps) {
  return (
    <div className="w-full rounded-xl hover:bg-[#e5eaf3] px-[15px] py-[18px] cursor-pointer flex">
      <div>[con]</div>
      <div className="flex w-full justify-between ml-2">
        {children}
        <div>{counter}</div>
      </div>
    </div>
  );
}

type MenuItemProps = {
  children: React.ReactNode;
  icon: React.ReactNode;
  counter?: number;
};

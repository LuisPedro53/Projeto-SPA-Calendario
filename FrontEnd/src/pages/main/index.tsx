import { Icon } from "@/Components/Icon";
import { MainMenu } from "@/Components/Menu/MainMenu";
import { SecondaryMenu } from "@/Components/Menu/SecondaryMenu";
import { Sidebar } from "@/Components/Sidebar/sidebar";
import { TaskInput } from "@/Components/Task/TaskInput";
import { Task } from "@/Components/Task/Task";
import { Title } from "@/Components/Title/Title";
import { User } from "@/Components/User/User";

export default function Main() {
  return (
    <main className="p-7">
      <div className="container mx-auto bg-white flex rounded-[20px] shadow-md overflow-hidden">
        <Sidebar>
          <div className="flex items-center mb-7">
            <span className="w-9 h-9 bg-slate-800 rounded-md mr-4"></span>{" "}
            MyTask
          </div>

          <div className="grid">
            <div className="grid gap-10">
              <MainMenu />
              <SecondaryMenu />
            </div>

            <User />
          </div>
        </Sidebar>

        <div className="p-7 flex flex-col w-full gap-y-[30px]">
          <div className="flex gap-x-[10px]">
            <Icon icon="List" />
            <Title heading="Title">Hoje</Title>
          </div>
          <TaskInput />

          <div className="flex flex-col w-full">
            <Title heading="SmallTitle">Para Fazer</Title>
            <ul className="flex w-full">
              <li className="w-full">
                <Task category="Categoria" dateToDo="13 Set. 23" isDone={false}>
                  Publicar o novo Layout nos grupos do Whats para alunos
                </Task>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

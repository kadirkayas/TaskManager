import Image from "next/image";
import TaskList from "./components/TaskList";
import PostTask from "./posttask/page";

export default function Home() {
  return (
   <div>
      <TaskList />
   </div>
  );
}

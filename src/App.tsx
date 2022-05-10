// NPM packages
import { useEffect, useState } from "react";

// Project files
import TaskItem from "component/TaskItem";
import iTask from "interfaces/iTask";
import eStatus from "interfaces/eStatus";

export default function App() {
  // Local state
  const [tasks, setTasks] = useState(Array<iTask>());
  const [status, setStatus] = useState(eStatus.Loading);

  // Properties
  const path: string = "https://jsonplaceholder.typicode.com/todos";

  // Methods
  useEffect(() => {
    async function loadData(path: string) {
      const response = await fetch(path);
      const json = await response.json();

      if (json) onSucess(json);
      else onFail();
    }
    loadData(path);
  }, []);

  function onSucess(data: iTask[]): void {
    setTasks(data);
    setStatus(eStatus.Loaded);
  }

  function onFail(): void {
    alert("We cannot load the todos");
    setStatus(eStatus.Error);
  }

  function onChange(message: string): void {
    alert(message);
  }

  // Components
  const Tasks = tasks.map((item) => (
    <TaskItem key={item.id} item={item} onChange={onChange} />
  ));

  // Safeguards
  if (status === eStatus.Loading) return <p>⏱</p>;
  if (status === eStatus.Error) return <p>❌</p>;

  return (
    <div className="App">
      <h1>Fetch todo in TypeScript</h1>
      <p>Number of items: {tasks.length}</p>
      <ol>{Tasks}</ol>
    </div>
  );
}

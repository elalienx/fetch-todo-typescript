// NPM packages
import { useEffect, useState } from "react";

// Project files
import iTodo from "interfaces/iTodo";

export default function App() {
  // Local state
  const [todos, setTodos] = useState(Array<iTodo>());
  const [status, setStatus] = useState(0); // <= bad, 0: loading, 1: loaded, 2: error

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

  function onSucess(data: iTodo[]): void {
    setTodos(data);
    setStatus(1);
  }

  function onFail(): void {
    alert("We cannot load the todos");
    setStatus(2);
  }

  // Safeguards
  if (status === 0) return <p>⏱</p>;
  if (status === 2) return <p>❌</p>;

  return (
    <div className="App">
      <h1>Fetch todo in TypeScript</h1>
      <p>Number of items: @{todos.length}@</p>
    </div>
  );
}

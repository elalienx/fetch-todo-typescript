// Project file
import iTask from "interfaces/iTask";

interface props {
  item: iTask;
  onChange: Function;
}

export default function TaskItem({ item, onChange }: props) {
  const { title, completed } = item;

  return (
    <li className="task-item">
      {title}
      <input type="checkbox" checked={completed} onChange={() => onChange()} />
    </li>
  );
}

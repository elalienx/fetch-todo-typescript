export default interface iTodo {
  userId: number; // this is the ID of the user, to know to which profile this tasks belongs to
  id: number; // The ID of the task itself.
  title: string; // The content of the task.
  completed: boolean; // To know if is done or not.
}

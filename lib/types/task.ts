export interface Task {
  id: number;
  title: string;
  projectId: string;
  description: string;
  startDate: string;
  dueDate: string;
  status: "To Do" | "In Progress" | "Ready for QA" | "Completed";
  priority: "High" | "Medium" | "Low";
  assignedTo: {
    name: string;
    avatar?: string;
  };
}
import { TaskHeader } from "@/components/tasks/task-header";
import { TaskFilters } from "@/components/tasks/task-filters";
import { TaskTable } from "@/components/tasks/task-table";

export default function TasksPage() {
  return (
    <div className="flex flex-col p-6 space-y-8">
      <TaskHeader />
      <div className="flex justify-between items-center">
        <TaskFilters />
      </div>
      <TaskTable />
    </div>
  );
}
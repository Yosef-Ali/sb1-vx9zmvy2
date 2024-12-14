import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="flex space-x-2">
        <Button variant="outline">+ New Group</Button>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <PlusIcon className="mr-2 h-4 w-4" />
          New Prompt
        </Button>
      </div>
    </div>
  );
}
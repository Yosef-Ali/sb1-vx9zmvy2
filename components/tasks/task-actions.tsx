"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon, Download } from "lucide-react";

export function TaskActions() {
  return (
    <div className="flex items-center space-x-2">
      <Button>
        <PlusIcon className="mr-2 h-4 w-4" />
        New Task
      </Button>
      <Button variant="outline">
        <Download className="mr-2 h-4 w-4" />
        Export
      </Button>
    </div>
  );
}
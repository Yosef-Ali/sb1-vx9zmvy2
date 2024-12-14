"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon, Download, Share2 } from "lucide-react";

export function TaskHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold">Tasks</h1>
        <p className="text-sm text-muted-foreground">Manage and track your team's tasks</p>
      </div>
      <div className="flex space-x-2">
        <Button variant="outline" size="sm">
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
        <Button size="sm">
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Task
        </Button>
      </div>
    </div>
  );
}
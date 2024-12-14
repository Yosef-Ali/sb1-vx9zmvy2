"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const taskStatuses = ["To Do", "In Progress", "Ready for QA", "Completed"];

const tasks = [
  {
    id: 1,
    title: "Implement user authentication",
    projectId: "PROJ-001",
    description: "Set up OAuth and user session management",
    startDate: "2024-01-15",
    dueDate: "2024-01-20",
    status: "In Progress",
    priority: "High",
    assignedTo: {
      name: "John Doe",
      avatar: "https://github.com/shadcn.png",
    },
  },
  // Add more sample tasks here
];

const priorityColors = {
  High: "text-red-500 bg-red-50 dark:bg-red-950",
  Medium: "text-yellow-500 bg-yellow-50 dark:bg-yellow-950",
  Low: "text-green-500 bg-green-50 dark:bg-green-950",
};

export function TaskBoard() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {taskStatuses.map((status) => (
        <Card key={status} className="h-[calc(100vh-20rem)] overflow-auto">
          <CardHeader className="sticky top-0 z-10 bg-background/95 backdrop-blur">
            <CardTitle className="flex items-center justify-between text-sm font-medium">
              {status}
              <Badge variant="secondary">
                {tasks.filter((task) => task.status === status).length}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {tasks
              .filter((task) => task.status === status)
              .map((task) => (
                <Card key={task.id} className="cursor-pointer hover:bg-accent">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {task.projectId}
                        </span>
                        <Badge
                          variant="outline"
                          className={cn(
                            "font-normal",
                            priorityColors[task.priority as keyof typeof priorityColors]
                          )}
                        >
                          {task.priority}
                        </Badge>
                      </div>
                      
                      <h3 className="font-semibold">{task.title}</h3>
                      
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {task.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            {task.dueDate}
                          </span>
                        </div>
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={task.assignedTo.avatar} />
                          <AvatarFallback>
                            {task.assignedTo.name.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
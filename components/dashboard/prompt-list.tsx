"use client";

import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { FileText, Star } from "lucide-react";

const prompts = [
  {
    title: "Social Post",
    lastUpdated: "12/12/2024",
  },
  {
    title: "Main - Email Broadcasts",
    lastUpdated: "12/11/2024",
  },
  {
    title: "EDNA details",
    lastUpdated: "12/6/2024",
  },
  {
    title: "Project Proposal",
    lastUpdated: "12/6/2024",
  },
  {
    title: "Learning Podcast",
    lastUpdated: "12/4/2024",
  },
];

export function PromptList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">All Prompts</h2>
        <Input
          placeholder="Search through prompts by title or content..."
          className="max-w-sm"
        />
      </div>

      <Tabs defaultValue="recent">
        <TabsList>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
          <TabsTrigger value="my-prompts">My Prompts</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="space-y-2">
        {prompts.map((prompt) => (
          <Card
            key={prompt.title}
            className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
          >
            <div className="flex items-center space-x-3">
              <FileText className="h-5 w-5 text-gray-500" />
              <div>
                <p className="font-medium">{prompt.title}</p>
                <p className="text-sm text-gray-500">
                  Last updated {prompt.lastUpdated}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
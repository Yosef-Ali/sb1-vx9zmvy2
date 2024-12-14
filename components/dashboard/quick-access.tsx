import { Card } from "@/components/ui/card";

const groups = [
  { title: "Web Dev", count: "prompts" },
  { title: "Podcasts", count: "prompts" },
  { title: "Social Media", count: "prompts" },
  { title: "Business Strategy", count: "prompts" },
  { title: "Email Marketing", count: "prompts" },
];

export function QuickAccessGroups() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">Quick Access Groups</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <Card
            key={group.title}
            className="p-6 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
          >
            <h3 className="font-medium">{group.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {group.count}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
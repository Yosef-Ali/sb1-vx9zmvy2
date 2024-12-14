import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
  {
    user: "John Doe",
    action: "signed up",
    timestamp: "2 minutes ago",
  },
  {
    user: "Alice Smith",
    action: "created a new project",
    timestamp: "1 hour ago",
  },
  {
    user: "Bob Johnson",
    action: "updated their profile",
    timestamp: "3 hours ago",
  },
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
            >
              <div>
                <p className="font-medium">{activity.user}</p>
                <p className="text-sm text-muted-foreground">{activity.action}</p>
              </div>
              <span className="text-sm text-muted-foreground">
                {activity.timestamp}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
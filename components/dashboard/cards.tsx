import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Activity, CreditCard, LineChart } from "lucide-react";

const cards = [
  {
    title: "Total Users",
    value: "10,482",
    icon: Users,
  },
  {
    title: "Active Now",
    value: "743",
    icon: Activity,
  },
  {
    title: "Revenue",
    value: "$45,231.89",
    icon: CreditCard,
  },
  {
    title: "Growth",
    value: "+12.4%",
    icon: LineChart,
  },
];

export function DashboardCards() {
  return (
    <>
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}
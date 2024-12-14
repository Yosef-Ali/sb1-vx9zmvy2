import { DashboardHeader } from "@/components/dashboard/header";
import { QuickAccessGroups } from "@/components/dashboard/quick-access";
import { PromptList } from "@/components/dashboard/prompt-list";

export default function DashboardPage() {
  return (
    <div className="flex flex-col p-6 space-y-8">
      <DashboardHeader />
      <QuickAccessGroups />
      <PromptList />
    </div>
  );
}
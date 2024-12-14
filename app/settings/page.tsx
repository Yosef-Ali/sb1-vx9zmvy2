import { SettingsHeader } from "@/components/settings/header";
import { SettingsShell } from "@/components/settings/shell";
import { SettingsForm } from "@/components/settings/form";

export const metadata = {
  title: "Settings | Modern Next.js Application",
  description: "Manage your account settings and preferences",
};

export default function SettingsPage() {
  return (
    <SettingsShell>
      <SettingsHeader
        heading="Settings"
        text="Manage your account settings and preferences."
      />
      <div className="grid gap-10">
        <SettingsForm />
      </div>
    </SettingsShell>
  );
}
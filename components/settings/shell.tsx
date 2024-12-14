interface SettingsShellProps {
  children: React.ReactNode;
}

export function SettingsShell({ children }: SettingsShellProps) {
  return (
    <div className="container space-y-6 py-8 md:py-12">
      {children}
    </div>
  );
}
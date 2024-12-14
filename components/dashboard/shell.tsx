interface DashboardShellProps {
  children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="container space-y-6 py-8 md:py-12">
      {children}
    </div>
  );
}
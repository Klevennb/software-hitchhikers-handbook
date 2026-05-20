import { Lock } from "lucide-react";
import { AppShell } from "@/components/app-shell/AppShell";
import { GlassPanel } from "@/components/ui/GlassPanel";

export default function SavedPage() {
  return (
    <AppShell>
      <GlassPanel className="mx-auto max-w-3xl p-10 text-center">
        <Lock className="mx-auto mb-5 h-10 w-10 text-primary-fixed" />
        <h1 className="text-3xl font-bold text-primary">SAVED_QUEUE_LOCKED</h1>
        <p className="mt-4 text-on-surface-variant">
          Saved topics are planned for the Clerk authentication and progress phase. The route is reserved so navigation and IA are stable.
        </p>
      </GlassPanel>
    </AppShell>
  );
}

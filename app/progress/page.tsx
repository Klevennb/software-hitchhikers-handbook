import { Activity } from "lucide-react";
import { AppShell } from "@/components/app-shell/AppShell";
import { GlassPanel } from "@/components/ui/GlassPanel";

export default function ProgressPage() {
  return (
    <AppShell>
      <GlassPanel className="mx-auto max-w-3xl p-10 text-center">
        <Activity className="mx-auto mb-5 h-10 w-10 text-tertiary-fixed-dim" />
        <h1 className="text-3xl font-bold text-primary">PROGRESS_TELEMETRY_PENDING</h1>
        <p className="mt-4 text-on-surface-variant">
          Completion, quiz attempts, and flashcard history will persist once Clerk and Prisma-backed user progress are enabled.
        </p>
      </GlassPanel>
    </AppShell>
  );
}

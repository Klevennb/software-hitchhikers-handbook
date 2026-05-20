import { Shield } from "lucide-react";
import { AppShell } from "@/components/app-shell/AppShell";
import { GlassPanel } from "@/components/ui/GlassPanel";

export default function AdminPage() {
  return (
    <AppShell>
      <GlassPanel className="mx-auto max-w-3xl p-10 text-center">
        <Shield className="mx-auto mb-5 h-10 w-10 text-secondary" />
        <h1 className="text-3xl font-bold text-primary">ADMIN_CONTENT_NODE_RESERVED</h1>
        <p className="mt-4 text-on-surface-variant">
          Admin editing is intentionally deferred. Seeded TypeScript content is the source of truth for the MVP.
        </p>
      </GlassPanel>
    </AppShell>
  );
}

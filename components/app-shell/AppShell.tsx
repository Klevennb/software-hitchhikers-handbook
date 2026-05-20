import type { ReactNode } from "react";
import { MobileNav } from "./MobileNav";
import { Sidebar } from "./Sidebar";
import { TopNav } from "./TopNav";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      <TopNav />
      <Sidebar />
      <main className="min-h-screen pt-16 md:pl-64">
        <div className="mx-auto max-w-container-max px-margin-mobile py-gutter pb-24 md:px-gutter">
          {children}
        </div>
      </main>
      <MobileNav />
    </>
  );
}

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";

const sidebarConfig = {
  width: "10rem",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": sidebarConfig.width,
      }}
    >
      <AppSidebar />
      <main>{children}</main>
    </SidebarProvider>
  );
}

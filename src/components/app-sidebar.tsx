import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader></SidebarHeader>
      <SidebarContent></SidebarContent>
      <SidebarGroup></SidebarGroup>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}

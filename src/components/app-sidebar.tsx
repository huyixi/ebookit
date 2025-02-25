import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  BookCheck,
  BookPlus,
  MessageSquareWarning,
  TableOfContents,
} from "lucide-react";

const makeItems = [
  {
    title: "Collect",
    url: "collect",
    icon: BookPlus,
  },
  {
    title: "Outline",
    url: "outline",
    icon: TableOfContents,
  },
  {
    title: "Output",
    url: "output",
    icon: BookCheck,
  },
];

const feedbackItems = [
  {
    title: "Feedback",
    url: "feedback",
    icon: MessageSquareWarning,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>ebookit</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Make</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {makeItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>FeedBack</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {feedbackItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}

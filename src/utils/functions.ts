// Active sidebar item when the current path is the same as the item path
export function activeSidebarItem(path: string): string {
  const sbItems = document.getElementsByClassName("menu-item active");
  for (var i = 0; i < sbItems.length; i++) {
    sbItems.item(i)!.className = "menu-item ";
  }
  return path === window.location.pathname ? "active" : "";
}

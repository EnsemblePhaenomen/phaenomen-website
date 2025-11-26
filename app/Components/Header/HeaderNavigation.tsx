import HeaderNavLink from "./HeaderNavLink";

interface SubMenuItem {
  href: string;
  label: string;
}

interface NavItem {
  href: string;
  label: string;
  subMenu?: SubMenuItem[];
}

interface HeaderNavigationProps {
  items: NavItem[];
  isDark: boolean;
}

export default function HeaderNavigation({ items, isDark }: HeaderNavigationProps) {
  return (
    <div className="pr-10 w-1/3 flex gap-6 justify-between" suppressHydrationWarning>
      {items.map((item) => (
        <HeaderNavLink 
          key={item.href} 
          href={item.href}
          label={item.label}
          isDark={isDark}
          subMenu={item.subMenu}
        />
      ))}
    </div>
  );
}
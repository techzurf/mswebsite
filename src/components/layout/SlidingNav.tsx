import { Link, useLocation } from "react-router-dom";

export interface NavItem {
  name: string;
  path: string;
}

interface SlidingNavProps {
  items: NavItem[];
}

export function SlidingNav({ items }: SlidingNavProps) {
  const location = useLocation();

  const isItemActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  return (
    <nav className="ms-nav-tabs" aria-label="Main Navigation">
      {items.map((item) => {
        const isActive = isItemActive(item.path);

        return (
          <Link
            key={item.path}
            to={item.path}
            className={`ms-nav-link ${isActive ? "active" : ""}`}
            aria-current={isActive ? "page" : undefined}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}

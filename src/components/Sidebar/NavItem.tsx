import { Icon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom"
import { IconType } from "react-icons";
import { activeNavItem, navItem } from "./style";
import { cx } from "@emotion/css";

interface NavItemProps {
  icon: IconType;
  url: string;
  children: string;
}
const NavItem = ({ icon, url, children }: NavItemProps) => {
  return (
    <NavLink
      id={children}
      to={url}
      className={({ isActive }: { isActive: boolean }) =>
        isActive ? cx(activeNavItem, navItem) : navItem
      }
    >
      {icon && (
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: 'white',
          }}
          as={icon}
        />
      )}
      {children}
    </NavLink>
  );
};

export default NavItem;

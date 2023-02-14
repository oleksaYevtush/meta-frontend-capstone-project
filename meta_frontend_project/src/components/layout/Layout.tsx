import * as React from "react";
import { AppShell } from "@mantine/core";
import { Header, Footer, Navbar } from "src/components";
import { StateContext } from "src/contexts";
import {
  IconBuildingWarehouse,
  IconHome,
  IconInfoSquareRounded,
  IconLogin,
  IconNotebook,
  IconTruckDelivery,
  TablerIcon,
} from "@tabler/icons";

export interface Link {
  icon: TablerIcon;
  title: string;
  link: string;
}

const navLinks: Link[] = [
  {
    icon: IconHome,
    title: "Home",
    link: "/",
  },
  {
    icon: IconInfoSquareRounded,
    title: "About",
    link: "/about",
  },
  {
    icon: IconNotebook,
    title: "Menu",
    link: "/menu",
  },
  {
    icon: IconBuildingWarehouse,
    title: "Reservations",
    link: "/reservations",
  },
  {
    icon: IconTruckDelivery,
    title: "Order Online",
    link: "/order-online",
  },
  {
    icon: IconLogin,
    title: "Login",
    link: "/login",
  },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { openMenu } = React.useContext(StateContext);

  return (
    <AppShell
      header={<Header navLinks={navLinks} />}
      navbar={<Navbar open={openMenu} navLinks={navLinks} />}
      footer={<Footer />}
      styles={{ main: { paddingLeft: 0, paddingRight: 0 } }}
    >
      {children}
    </AppShell>
  );
};

export default Layout;

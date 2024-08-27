"use client";

import { AppShell, Burger, Group, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Entries from "./constants/MenuEntries";

export default function CollapseDesktop() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="xs">
        {Entries.map((MainEntry) => {
          return (
            <NavLink label={MainEntry.label} key={Entries.indexOf(MainEntry)}>
              {MainEntry.subMenu.map((SubEntry) => {
                return (
                  <NavLink
                    key={MainEntry.subMenu.indexOf(SubEntry)}
                    label={SubEntry.label}
                    leftSection={SubEntry.icon}
                  ></NavLink>
                );
              })}
            </NavLink>
          );
        })}
      </AppShell.Navbar>
      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}

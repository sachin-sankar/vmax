import {
  IconUserCircle,
  IconKey,
  IconBuildingBank,
  IconSchool,
  IconMessageUser,
  IconUserStar,
} from "@tabler/icons-react";
import { ReactNode } from "react";

type MainMenuEntry = {
  label: string;
  subMenu: SubMenuEntry[];
};

type SubMenuEntry = {
  label: string;
  icon: ReactNode;
};

const Entries: MainMenuEntry[] = [
  {
    label: "My Info",
    subMenu: [
      { label: "Profile", icon: <IconUserCircle></IconUserCircle> },
      { label: "Credentials", icon: <IconKey></IconKey> },
      { label: "Bank Info", icon: <IconBuildingBank></IconBuildingBank> },
      { label: "Scholarships", icon: <IconSchool></IconSchool> },
    ],
  },
  {
    label: "Proctor",
    subMenu: [
      { label: "Proctor Info", icon: <IconUserStar></IconUserStar> },
      { label: "Proctor Messages", icon: <IconMessageUser></IconMessageUser> },
    ],
  },
];

export default Entries;

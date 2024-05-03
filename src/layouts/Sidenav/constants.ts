import AppIcon from "@assets/icons/elements/apps.svg?react";
import LinkIcon from "@assets/icons/actions/link-link.svg?react";
import MoneyIcon from "@assets/icons/elements/money.svg?react";
import ShieldIcon from "@assets/icons/elements/safety-shield.svg?react";
import UserIcon from "@assets/icons/elements/user.svg?react";
import DocsIcon from "@assets/icons/elements/docs.svg?react";

export const HEADER_LINKS = [
  { title: "Applications",  route: "/applications", Icon: AppIcon      },
];

export const MAIN_LINKS = [
  { title: "Connections",   route: "/connections",  Icon: LinkIcon,    },
  { title: "Cost",          route: "/cost",         Icon: MoneyIcon,   },
  { title: "Security",      route: "/security",     Icon: ShieldIcon,  badge: "Beta" },
];

export const FOOTER_LINKS = [
  { title: "Admin",         route: "/admin",        Icon: UserIcon,    },
  { title: "Docs",          route: "/docs",         Icon: DocsIcon,    },
];

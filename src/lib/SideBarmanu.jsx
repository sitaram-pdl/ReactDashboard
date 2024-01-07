import {
  Database,
  GalleryHorizontal,
  HelpCircle,
  PenTool,
  ReplyIcon,
  Settings2,
  TvIcon,
  User,
} from 'lucide-react';

export const sidebarMenu = [
  {
    text: 'Profile',
    icon: <User size={15} />,
  },
  {
    text: 'Dashboard',
    icon: <Database size={15} />,
  },
  {
    text: 'Nft Gallery',
    icon: <GalleryHorizontal size={15} />,
  },
  {
    text: 'Ape Tool',
    icon: <PenTool size={15} />,
    subMenu: [
      {
        text: 'Sub Menu 1',
        icon: <TvIcon size={15} />,
      },
      {
        text: 'Sub Menu 2',
        icon: <TvIcon size={15} />,
      },
      {
        text: 'Sub Menu 3',
        icon: <TvIcon size={15} />,
      },
      {
        text: 'Sub Menu 4',
        icon: <TvIcon size={15} />,
      },
    ],
  },
  {
    text: 'Settings',
    icon: <Settings2 size={15} />,
  },
  {
    text: 'Help',
    icon: <HelpCircle size={15} />,
  },
  {
    text: 'BugReport',
    icon: <ReplyIcon size={15} />,
  },
];

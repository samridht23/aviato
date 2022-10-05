import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import AvatarImage from "../../public/eric.svg";
import cx from "classnames";
import { ReactNode } from "react";
import {
  FileIcon,
  MixerHorizontalIcon,
  ExitIcon,
  ArchiveIcon,
} from "@radix-ui/react-icons";

interface RadixMenuItem {
  label: string;
  icon?: ReactNode;
}

const generalMenuItems: RadixMenuItem[] = [
  {
    label: "Dashboard",
    icon: <FileIcon className="mr-2 h-3.5 w-3.5" />,
  },
  {
    label: "Catalog",
    icon: <ArchiveIcon className="mr-2 h-3.5 w-3.5" />,
  },
];

const UserMenuItem: RadixMenuItem[] = [
  {
    label: "Settings",
    icon: <MixerHorizontalIcon className="mr-2 h-3.5 w-3.5" />,
  },
  {
    label: "Logout",
    icon: <ExitIcon className="mr-2 h-3.5 w-3.5" />,
  },
];

const DropdownMenu = () => {
  return (
    <div className="flex inline-block ">
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger className="rounded-full">
          <span className="flex">
            <Image src={AvatarImage} />
          </span>
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content
            align="end"
            sideOffset={5}
            className={cx(
              " radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
              "w-48 rounded-lg px-1.5 py-1 shadow-md",
              "bg-white "
            )}
          >
            {generalMenuItems.map(({ label, icon }, i) => (
              <DropdownMenuPrimitive.Item
                key={`${label}-${i}`}
                className={cx(
                  "flex cursor-default select-none items-center rounded-md px-2 py-2 text-sm outline-none",
                  "text-gray-500 focus:text-gray-500 focus:bg-gray-200 "
                )}
              >
                {icon}
                <span className="flex-grow text-gray-700">{label}</span>
              </DropdownMenuPrimitive.Item>
            ))}

            <DropdownMenuPrimitive.Separator className="my-1 h-px bg-gray-200 " />

            {UserMenuItem.map(({ label, icon }, i) => (
              <DropdownMenuPrimitive.Item
                key={`${label}-${i}`}
                className={cx(
                  "flex cursor-default select-none items-center rounded-md px-2 py-2 text-sm outline-none",
                  "text-gray-500 focus:text-gray-500 focus:bg-gray-200"
                )}
              >
                {icon}
                <span className="flex-grow text-gray-700">
                  {label}
                </span>
              </DropdownMenuPrimitive.Item>
            ))}
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    </div>
  );
};

export default DropdownMenu;

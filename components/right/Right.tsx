import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import List from "../../components/list/List";
import cx from "classnames";
import { ChevronDownIcon, FileIcon, ArchiveIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";
const TAGS = Array.from({ length: 30 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);
interface RadixMenuItem {
  label: string;
  shortcut?: string;
  icon?: ReactNode;
}
const generalMenuItems: RadixMenuItem[] = [
  {
    label: "Pending",
    icon: <FileIcon className="mr-2 h-3.5 w-3.5" />,
  },
  {
    label: "Rejected",
    icon: <ArchiveIcon className="mr-2 h-3.5 w-3.5" />,
  },
  {
    label: "Rejected",
    icon: <ArchiveIcon className="mr-2 h-3.5 w-3.5" />,
  },
];
const Right = () => {
  return (
    <div>
      <div className="p-4 bg-gray-50">
        <DropdownMenuPrimitive.Root>
          <DropdownMenuPrimitive.Trigger className="rounded-full">
            <span className="flex p-1 items-center justify-center">
              Pending <ChevronDownIcon className="mx-1" />
            </span>
          </DropdownMenuPrimitive.Trigger>

          <DropdownMenuPrimitive.Portal>
            <DropdownMenuPrimitive.Content
              align="start"
              sideOffset={5}
              className={cx(
                " radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
                "w-48 rounded-lg px-1.5 py-1 shadow-md",
                "bg-gray-50"
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
            </DropdownMenuPrimitive.Content>
          </DropdownMenuPrimitive.Portal>
        </DropdownMenuPrimitive.Root>
      </div>
      <ScrollArea.Root className="w-[18rem] h-screen rounded-md">
        <ScrollArea.Viewport className="h-screen">
          <div className="px-2 py-2">
            {TAGS.map((tag) => (
              <div className="leading-4 mt-1" key={tag}>
                <List />
              </div>
            ))}
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical" className="flex">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        {/*<ScrollArea.Scrollbar orientation="horizontal">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>*/}
        <ScrollArea.Corner />
      </ScrollArea.Root>
    </div>
  );
};
export default Right;

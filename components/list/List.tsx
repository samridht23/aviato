import * as Avatar from "@radix-ui/react-avatar";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import cx from "classnames";
const List = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-gray-50 py-2 hover:outline outline-gray-200 outline-offset-0 rounded">
        <div>
          <Avatar.Root className="inline-flex w-12 h-12  align-middle overflow-hidden items-center justify-center rounded-full">
            <Avatar.Image
              alt="Aviato"
              src="https://images.unsplash.com/photo-1558983467-5dd0595a81a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="object-cover w-[100%] h-[100%]"
            />
            <Avatar.Fallback delayMs={300}>Aviato</Avatar.Fallback>
          </Avatar.Root>
        </div>
        <div className="px-4 ">
          <div className="">
            <h1 className="text-gray-800 md:text-sm">Aviato</h1>
          </div>
          <div>
            <h2 className="text-xs text-gray-400">Video game company</h2>
          </div>
        </div>
        <div className="px-2">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <DotsVerticalIcon />
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                align="end"
                sideOffset={5}
                className={cx(
                  " radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
                  "w-36 rounded-lg px-1.5 py-1 shadow-md ",
                  "bg-white"
                )}
              >
                <DropdownMenu.Item
                  className={cx(
                    "flex cursor-default select-none items-center rounded-md px-2 py-2 text-sm outline-none",
                    "text-gray-500 focus:text-gray-500 focus:bg-gray-200 "
                  )}
                >
                  Test1
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  className={cx(
                    "flex cursor-default select-none items-center rounded-md px-2 py-2 text-sm outline-none",
                    "text-gray-500 focus:text-gray-500 focus:bg-gray-200 "
                  )}
                >
                  Test2
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  className={cx(
                    "flex cursor-default select-none items-center rounded-md px-2 py-2 text-sm outline-none",
                    "text-gray-500 focus:text-gray-500 focus:bg-gray-200 "
                  )}
                >
                  Test3
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </>
  );
};
export default List;

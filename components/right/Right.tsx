import Sidebar from "../components/sidebar/Sidebar";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import Main from "../components/main/Main";
import List from "../../components/list/List";
import * as Select from "@radix-ui/react-select";
import cx from "classnames";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
} from "@radix-ui/react-icons";
const TAGS = Array.from({ length: 20 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);
const Right = () => {
  return (
    <div>
      <ScrollArea.Root className="w-[19rem] h-[40rem] rounded-md bg-gray-400">
        <ScrollArea.Viewport className="w-[100%] h-[100%]">
          <div className="px-2 py-2">
            <div className="px-8">
              <Select.Root>
                <Select.Trigger className="flex items-center">
                  <Select.Value placeholder="Pending" />
                  <Select.Icon className="ml-2">
                    <ChevronDownIcon />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Content>
                  <Select.ScrollUpButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
                    <ChevronUpIcon />
                  </Select.ScrollUpButton>
                  <Select.Viewport className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg">
                    <Select.Group>
                      {["Pending", "Contacted", "Rejected"].map((f, i) => (
                        <Select.Item
                          disabled={f === "Grapes"}
                          key={`${f}-${i}`}
                          value={f.toLowerCase()}
                          className={cx(
                            "relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 font-medium focus:bg-gray-100 dark:focus:bg-gray-900",
                            "radix-disabled:opacity-50",
                            "focus:outline-none select-none"
                          )}
                        >
                          <Select.ItemText>{f}</Select.ItemText>
                          <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                            <CheckIcon />
                          </Select.ItemIndicator>
                        </Select.Item>
                      ))}
                    </Select.Group>
                  </Select.Viewport>
                </Select.Content>
              </Select.Root>
            </div>
            {TAGS.map((tag) => (
              <div className="leading-4 mt-2.5 pt-2.5" key={tag}>
                <List />
              </div>
            ))}
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical" className="flex">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar orientation="horizontal">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner />
      </ScrollArea.Root>
    </div>
  );
};
export default Right;

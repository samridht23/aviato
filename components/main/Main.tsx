import {
  Cross1Icon,
  BookmarkIcon,
  CheckIcon,
  PlayIcon,
  PauseIcon,
} from "@radix-ui/react-icons";
import * as Avatar from "@radix-ui/react-avatar";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
const Main = () => {
  const [playing, setPlaying] = useState(false);
  const handlePlayPause = () => {
    setPlaying(!playing);
  };
  return (
    <>
      <div className="flex relative z-5 border drop-shadow-xl rounded-xl mb-4 bg-neutral-900 overflow-hidden w-[50rem] h-[37.5rem]">
        <ReactPlayer
          loop
          playing={playing}
          width={"800px"}
          height={"600px"}
          url="https://vimeo.com/175646445"
        />
        <div className="flex absolute w-full h-full transition ease-in-out opacity-0 hover:opacity-80 bg-gradient-to-t from-gray-800">
          <div className="flex flex-col w-full justify-end">
            <div className="flex w-full items-center justify-start px-14">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <div>
                    <Avatar.Root className="inline-flex w-12 h-12  align-middle overflow-hidden items-center justify-center rounded-full ">
                      <Avatar.Image
                        src="https://images.unsplash.com/photo-1558983467-5dd0595a81a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="Aviato"
                        className="object-cover w-[100%] h-[100%]"
                      />
                      <Avatar.Fallback delayMs={300}>EZ</Avatar.Fallback>
                    </Avatar.Root>
                  </div>
                  <div className="text-white mx-2">
                    <div className="font-[NeueMedium]">Eric Zhu</div>
                    <div className="text-sm">Aviato</div>
                  </div>
                </div>
                <div className="flex my-2">
                  <div className="flex border text-sm px-2 mx-1  text-white backdrop-blur-2xl border-gray-50 rounded-lg justify-center">
                    Transport
                  </div>
                  <div className="flex border text-sm px-2 mx-1 text-white backdrop-blur-2xl border-gray-50 rounded-lg justify-center">
                    Computer
                  </div>
                </div>
                <div className="text-sm text-white px-1  mx-1">
                  Building The Best Startup Of All Time
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full p-12">
              <div className="mx-1">
                <button className="flex items-center justify-center w-full px-4 py-2 transition ease-in-out hover:bg-sky-400 text-white text-sm backdrop-blur-2xl bg-opacity-80 bg-gray-700 border rounded-full">
                  <Cross1Icon className="mx-1" />
                  <p className="mx-1">No</p>
                </button>
              </div>
              <div className="mx-1">
                <button className="flex items-center justify-center w-full px-4 py-2 transition ease-in-out hover:bg-sky-400 text-white text-sm backdrop-blur-2xl bg-opacity-80 bg-gray-700 border rounded-full">
                  <BookmarkIcon className="mx-1" />
                  <p className="mx-1">Save</p>
                </button>
              </div>
              <div className="mx-1">
                <button className="flex items-center justify-center w-full px-4 py-2 transition ease-in-out hover:bg-sky-400 text-white text-sm backdrop-blur-2xl bg-opacity-80 bg-gray-700 border rounded-full">
                  <CheckIcon className="mx-1" />
                  <p className="mx-1">Yes</p>
                </button>
              </div>
              <div className="mx-1">
                <button
                  onClick={handlePlayPause}
                  className="flex items-center justify-center w-full transition ease-in-out px-4 py-2 hover:bg-sky-400  text-white text-sm backdrop-blur-2xl bg-opacity-80 bg-gray-700 border rounded-full"
                >
                  {playing ? (
                    <div className="flex items-center justify-center transition ease-in-out">
                      <PauseIcon className="mx-1" />
                      <p className="mx-1">Pause</p>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <PlayIcon className="mx-1" />
                      <p className="mx-1">Play</p>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;

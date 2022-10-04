import Link from "next/link";
import Image from "next/image";
import HomeIcon from "../../public/home.svg";
import MessageIcon from "../../public/message.svg";
import TrendingIcon from "../../public/trending.svg";

const Sidebar = () => {
  return (
    <>
      <div className="flex fixed top-[30%] left-[8%] ">
        <div className="flex bg-[#3981F6]  px-3 py-[2rem] border-none rounded-full flex-col items-center justify-between">
          <Link href="/main">
            <div className="flex bg-gray-100 p-5 rounded-full items-center cursor-pointer my-1">
              <Image src={HomeIcon} />
            </div>
          </Link>
          <Link href="/main">
            <div className="flex p-5 items-center cursor-pointer my-1">
              <Image src={MessageIcon} />
            </div>
          </Link>
          <Link href="/main">
            <div className="flex p-5 items-center cursor-pointer my-1">
              <Image src={TrendingIcon} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Sidebar;

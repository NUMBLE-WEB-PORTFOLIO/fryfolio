import Link from "next/link";

import { CircleLine } from "@/components/Motion";

const NAV_ITEM_LIST = [
  { title: "Project", pathname: "/" },
  { title: "About", pathname: "/about" },
] as const;

const Header = ({
  activeItem,
  mode = "dark",
}: {
  activeItem: (typeof NAV_ITEM_LIST)[number]["title"];
  mode?: "dark" | "light";
}) => {
  const textColorClass = mode === "light" ? "text-white" : "text-black";
  const circlePathColorClass = mode === "light" ? "white" : "black";

  return (
    <div className={textColorClass}>
      <div className="fixed top-[4.5rem] left-[4.5rem] z-20">
        <Link href="/">Fryfolio</Link>
      </div>
      <nav className="block fixed top-[4.5rem] right-[4.5rem] z-20">
        <ul>
          {NAV_ITEM_LIST.map(({ title, pathname }) => {
            const isActive = activeItem === title;
            const circleVisibleClass = isActive ? "visible" : "invisible";

            return (
              <li key={title} className="relative inline-block ml-[3rem]">
                <Link href={{ pathname }} className="group">
                  <span>{title}</span>
                  <CircleLine
                    color={circlePathColorClass}
                    className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-none path ${circleVisibleClass}`}
                  />
                  {!isActive && (
                    <div
                      className={`invisible group-hover:visible nav-underline`}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;

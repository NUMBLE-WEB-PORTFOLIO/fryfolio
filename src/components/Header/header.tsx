import Link from "next/link";

import { CircleLine } from "@/components/Motion";

const NAV_ITEM = [
  { title: "Project", pathname: "/", active: true },
  { title: "About", pathname: "/about", active: false },
];

const Header = () => {
  return (
    <div>
      <div className="fixed top-[4.5rem] left-[4.5rem] z-50">
        <Link href="/">Fryfolio</Link>
      </div>
      <nav className="block fixed top-[4.5rem] right-[4.5rem] z-50">
        <ul>
          {NAV_ITEM.map(({ title, pathname, active }) => (
            <li key={title} className="relative inline-block ml-[3rem]">
              <Link href={{ pathname }} className="group">
                <span>{title}</span>
                <CircleLine
                  className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-none path ${
                    active ? "visible" : "invisible"
                  }`}
                />
                {!active && (
                  <div
                    className={`invisible group-hover:visible nav-underline`}
                  ></div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;

import Link from "next/link";

const NAV_ITEM_CLASSES = "inline-block ml-[3rem]";

const Header = () => {
  return (
    <div>
      <div className="fixed top-[4.5rem] left-[4.5rem] z-10">
        <Link href="/">Fryfolio</Link>
      </div>
      <nav className="block fixed top-[4.5rem] right-[4.5rem] z-10">
        <ul className="flex-row">
          <li className={`${NAV_ITEM_CLASSES}`}>
            <Link href="/">Project</Link>
          </li>
          <li className={`${NAV_ITEM_CLASSES}`}>
            <Link href="/">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

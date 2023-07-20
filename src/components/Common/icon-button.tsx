import Link from "next/link";
import Image from "next/image";
import { ComponentProps } from "react";

type IconType = "github" | "globe";

const Icons: Record<IconType, { name: string; src: string }> = {
  github: { name: "github", src: "/icons/github.svg" },
  globe: { name: "globe", src: "/icons/globe.svg" },
};

const IconButton = ({
  name,
  href,
}: {
  name: IconType;
  href: ComponentProps<typeof Link>["href"];
}) => {
  return (
    <Link href={href} target="_blank">
      <Image src={Icons[name].src} width="40" height="39" alt={name} />
    </Link>
  );
};

export default IconButton;

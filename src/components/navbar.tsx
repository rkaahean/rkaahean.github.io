import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex h-16 w-full flex-row text-base text-stone-300">
      <ul className={classNames("flex h-full flex-row items-center space-x-4")}>
        <li className="hover:text-stone-100">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-stone-100">
          <Link href="/">About</Link>
        </li>
      </ul>
      <ul className={classNames("ml-auto flex h-full items-center space-x-8")}>
        <li className="hover:text-stone-100">
          <Link href="https://www.twitter.com/@rkaahean" target="_blank">
            <div className="relative h-6 w-6">
              <Image
                src={
                  "https://api.iconify.design/tabler:brand-twitter-filled.svg?color=%23888888"
                }
                alt=""
                fill
              />
            </div>
          </Link>
        </li>
        <li className="hover:text-stone-100">
          <Link
            href="https://www.linkedin.com/in/ranjansrinivas/"
            target="_blank"
          >
            <div className="relative h-6 w-6">
              <Image
                src={
                  "https://api.iconify.design/radix-icons:linkedin-logo.svg?color=%23888888"
                }
                alt=""
                fill
              />
            </div>
          </Link>
        </li>
        <li className="hover:text-stone-100">
          <Link href="https://www.github.com/rkaahean" target="_blank">
            <div className="relative h-6 w-6">
              <Image
                src={
                  "https://api.iconify.design/radix-icons:github-logo.svg?color=%23888888"
                }
                alt=""
                fill
              />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

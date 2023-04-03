import classNames from "classnames";
import Link from "next/link";

export const Navbar = () => {
    return (
        <div className="text-stone-300 h-16 text-base w-full px-2">
            <ul className={
                    classNames("flex flex-row space-x-2 items-center h-full",
                )}>
                <li className="hover:text-stone-100">
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className="hover:text-stone-100">
                    <Link href="/about">
                        About
                    </Link>
                </li>
            </ul>
        </div>
    )
}
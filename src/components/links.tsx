import Image from "next/image"
import { CURRENT_COMPANY_LOGO } from "../data/assets/logos"
import classNames from "classnames"

export function Link() {
    return (
        <div className="flex items-center underline underline-offset-4">
            <div className="relative h-5 w-5 mr-1">
                <Image
                    src={CURRENT_COMPANY_LOGO}
                    alt=""
                    fill
                />
            </div>
            <a className={
                classNames("inline text-slate-300 hover:text-sky-400")}
                href="https://www.chippercash.com"
            >
                ChipperCash
            </a>
        </div>
    )
}
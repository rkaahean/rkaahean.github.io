import Image from "next/image"
import { CURRENT_COMPANY_LOGO } from "../data/assets/logos"
import classNames from "classnames"

export function Link() {
    return (
        <div className="flex items-center">
            <div className="relative">
                <Image
                    src={CURRENT_COMPANY_LOGO}
                    alt=""
                    width={20}
                    height={20}
                />
            </div>

            <a className={
                classNames("inline text-slate-300 hover:text-slate-100 hover:font-medium")}
                href="https://www.chippercash.com"
            >
                ChipperCash
            </a>
        </div>
    )
}
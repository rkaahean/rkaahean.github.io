import classNames from "classnames"
import Image from "next/image"

export const CustomLink = ({url, text, logo}: {url:string;text:string;logo:string}) => {
    return (
        <div className="flex items-center underline underline-offset-4">
            <div className="relative h-5 w-5 mx-1">
                <Image
                    src={logo}
                    alt=""
                    fill
                />
            </div>
            <a className={
                classNames("inline text-slate-300 hover:text-sky-400")}
                href={url}
            >
                {text}
            </a>
        </div>
    )
}
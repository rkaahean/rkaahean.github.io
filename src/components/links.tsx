import classNames from "classnames";
import Image from "next/image";

export const CustomLink = ({
  url,
  text,
  logo,
}: {
  url: string;
  text: string;
  logo: string;
}) => {
  return (
    <div className="flex items-center underline underline-offset-4">
      <div className="relative mx-1 h-5 w-5">
        <Image src={logo} alt="" fill />
      </div>
      <a
        className={classNames("inline text-stone-100 hover:text-sky-400")}
        href={url}
      >
        {text}
      </a>
    </div>
  );
};

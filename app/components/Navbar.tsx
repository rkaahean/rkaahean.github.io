import { Button } from "@/components/ui/button";
import { GithubIcon, HomeIcon, InfoIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex h-16 items-center gap-5">
      <Link href="/">
        <Button>
          <div className="flex flex-row items-end justify-end gap-2">
            <HomeIcon size={24} />
            <div>Home</div>
          </div>
        </Button>
      </Link>

      <Link href="/about">
        <Button>
          <div className="flex flex-row items-end justify-end gap-2">
            <InfoIcon size={24} />
            <div>About</div>
          </div>
        </Button>
      </Link>

      <Link href="/blog">
        <Button>
          <div className="flex flex-row items-end justify-end gap-2">
            <InfoIcon size={24} />
            <div>Blog</div>
          </div>
        </Button>
      </Link>

      <Link href="https://www.x.com/@rkaahean">
        <Button>
          <TwitterIcon size={24} />
        </Button>
      </Link>

      <Link href="https://www.github.com/rkaahean">
        <Button>
          <GithubIcon size={24} />
        </Button>
      </Link>
    </div>
  );
};

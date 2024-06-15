import {
  Camera,
  Home,
  LayoutDashboard,
  Search,
  Trophy,
  User,
} from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface FooterProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export function Footer({ ...props }: FooterProps) {
  return (
    <footer {...props} className={twMerge("w-full p-8", props.className)}>
      <ul className="flex items-center justify-between">
        <li>
          <Link href="/dashboard">
            <Home />
          </Link>
        </li>
        <li>
          <LayoutDashboard />
        </li>
        <li className="bg-indigo-500 p-2 rounded-full text-white">
          <Link href="/dashboard/camera">
            <Camera className="h-8 w-8" />
          </Link>
        </li>
        <li>
          <Trophy />
        </li>
        <li>
          <User />
        </li>
      </ul>
    </footer>
  );
}

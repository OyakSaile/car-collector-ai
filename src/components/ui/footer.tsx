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
      <ul className="flex items-center justify-between shadow-xl p-4 rounded-full">
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
            <Camera />
          </Link>
        </li>
        <li>
          <Trophy />
        </li>
        <li>
          <Link href="/dashboard/profile">
            <User />
          </Link>
        </li>
      </ul>
    </footer>
  );
}

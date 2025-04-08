import Link from "next/link";
import { Button } from "@/components/ui/button";
// import the hamburger icon
import { FiMenu } from "react-icons/fi";
import { ThemeButton } from "./theme-btn";

//import the keys for sheets
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 container mx-auto border-b bg-background/50 backdrop-blur sticky top-0 ">
      <Link href="/" className="text-xl font-bold">
        MyLogo
      </Link>

      <ul className="hidden md:flex space-x-10 items-center">
        <li>
          <Link href="/" className="hover:text-gray-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-500">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-500">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-gray-500">
            Blog
          </Link>
        </li>
        <li>
          <div className="items-center flex">
            <Button variant="outline" className="mx-1">
              Login
            </Button>
            <Button variant="outline" className="mx-1">
              SignUp
            </Button>
            <ThemeButton />
          </div>
        </li>
      </ul>

      <div className="md:hidden ">
        <Sheet>
          <SheetTrigger className="flex items-center focus:outline-none text-3xl cursor-pointer gap-4">
            <FiMenu />
            <ThemeButton />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-2xl text-center pb-[40px]">
                MyLogo
              </SheetTitle>
              <SheetDescription>
                <ul className="flex flex-col space-y-4 items-center text-[18px] gap-4">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <Button variant="outline" className="mx-1">
                        Login
                      </Button>
                      <Button variant="outline" className="mx-1">
                        SignUp
                      </Button>
                    </div>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;

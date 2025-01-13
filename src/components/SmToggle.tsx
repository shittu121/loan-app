import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { GiHamburgerMenu } from "react-icons/gi";

// import Image from "next/image";
import Link from "next/link";


export function SmToggle() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* <Button variant="outline">Open</Button> */}
        <GiHamburgerMenu className="h-7 w-7" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            Loan Application
          {/* <Image src="/images/3080.png" className='mx-auto lg:mx-0 md:mx-0' alt='logo' width={200} height={200} /> */}
          </SheetTitle>
          <SheetDescription>
            {/* Make changes to your profile here. Click save when you&apos;re done. */}
          </SheetDescription>
          <div className=" flex justify-start space-y-10 pt-10 flex-col text-xl">
             <Link href="/" className='hover:text-[#39cfa7] flex-shrink-0'> <h3>Home</h3> </Link>
             <Link href="/" className='hover:text-[#39cfa7] flex-shrink-0 md:hidden lg:flex'> <h3>Features</h3> </Link>
             <Link href="/" className='hover:text-[#39cfa7] flex-shrink-0 md:hidden lg:flex'> <h3>Docs</h3> </Link>
             <Link href="/" className='hover:text-[#39cfa7] flex-shrink-0'> <h3>Sign in</h3> </Link>
          </div>
        </SheetHeader>
          
     
        <SheetFooter className="mt-10">
          <SheetClose asChild>
          <Button><Link href="/" className=''> Join </Link></Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

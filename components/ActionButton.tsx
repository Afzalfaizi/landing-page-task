import React from 'react'
import { Button } from './ui/button'
import { AlignJustify } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function ActionButton() {
  return (
    <div>
      <div className=' md:hidden'>
        <Sheet>
          <SheetTrigger>
            <AlignJustify/>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className=' flex flex-col space-y-4 w-full text-lg text-black mt-10'>
                  <Link href={`/`}>
                    Sign in
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

      </div>
    </div>
  )
}

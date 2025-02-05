"use client"
import { useState } from "react";

import { Button } from "@/components/ui/button";
import Image from 'next/image'
import { TypingAnimation } from "@/components/ui/typing-animation";
import Link from "next/link";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog";

export default function Home() {

  const [imageSrc, setImageSrc] = useState('/images/milk-and-mocha.png');

  const handleMouseEnter = () => {
    setImageSrc('/images/milk-and-mocha.gif')
  }

  const handleMouseLeave = () => {
    setImageSrc('/images/milk-and-mocha.png')
  }

  return (




    <div className="min-h-screen flex flex-col justify-center items-center">
      <TypingAnimation className="text-4xl font-sans text-[#ffc5e6]">Go on a date with me?</TypingAnimation>

      <div>
        <Image 
          src={imageSrc}
          alt="Bear"
          width={150}      
          height={75}    
        />
      </div>

      <div className="flex gap-4 font-sans">
        <Link href='./yes'>
          <Button className="text-[#ffc5e6]">Yes</Button>
        </Link>
        
        

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button 
              className="text-[#ffc5e6]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              >
                No
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="font-sans tracking-wide text-3xl">Are you sure you don't want me?</AlertDialogTitle>
              <AlertDialogDescription className="font-sans">
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="font-sans">Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
    </AlertDialog>

      </div>
      
    </div>
  );
}

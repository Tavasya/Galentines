'use client'
import { useState } from "react";

import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import { TypingAnimation } from "@/components/ui/typing-animation";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction
} from "@/components/ui/alert-dialog";

interface DialogProps {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  buttonAction: () => void;
}

export default function Home() {
  const [imageSrc, setImageSrc] = useState('/images/milk-and-mocha.png');
  const [dialogs, setDialogs] = useState<DialogProps[]>([]);

  const handleMouseEnter = () => {
    setImageSrc('/images/milk-and-mocha.gif');
  };

  const handleMouseLeave = () => {
    setImageSrc('/images/milk-and-mocha.png');
  };

  const openNewDialog = (title: string, description: string, buttonText: string, buttonAction: () => void) => {
    const newDialog = {
      id: Date.now(),
      title,
      description,
      buttonText,
      buttonAction,
    };
    setDialogs((prevDialogs) => [...prevDialogs, newDialog]);
  };

  const closeDialog = (id: number) => {
    setDialogs((prevDialogs) => prevDialogs.filter(dialog => dialog.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <TypingAnimation className="text-4xl font-sans text-[#ffc5e6]">
        Go on a date with me?
      </TypingAnimation>

      <div>
        <Image 
          src={imageSrc}
          alt="Bear"
          width={150}      
          height={75}    
        />
      </div>

      <div className="flex gap-4 font-sans">
        <Link href="/yes">
          <Button className="text-[#ffc5e6]">Yes</Button>
        </Link>
        


        {/* First Dialog */}
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
                But are you sureeeeeeeeeeeee?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="font-sans">Close</AlertDialogCancel>
              <AlertDialogAction className="font-sans text-[#ffc5e6]" onClick={() => openNewDialog(
                "But are you like sure sure??", 
                "Remember the cute bear 🐻", 
                "I hate bears", 
                () => openNewDialog(
                  "You hate bears???", 
                  "I could never go on a date with someone who hates bears", 
                  "I'm sorry", 
                  () => openNewDialog(
                    "YAYY that means we could go on a date??", 
                    "Pleaseeeee", 
                    "Pick a date", 
                    () => {}
                  )
                )
              )}>
                Yes
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Dynamically Generated Dialogs */}
        {dialogs.map((dialog) => (
          <AlertDialog key={dialog.id} open={true} onOpenChange={() => closeDialog(dialog.id)}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="font-sans tracking-wide text-3xl">{dialog.title}</AlertDialogTitle>
                <AlertDialogDescription className="font-sans">
                  {dialog.description}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="font-sans" onClick={() => closeDialog(dialog.id)}>
                  Close
                </AlertDialogCancel>
                {dialog.buttonText === "Pick a date" ? (
                  <Link href="/yes">
                    <AlertDialogAction className="font-sans">
                      {dialog.buttonText}
                    </AlertDialogAction>
                  </Link>
                ) : (
                  <AlertDialogAction className="font-sans" onClick={dialog.buttonAction}>
                    {dialog.buttonText}
                  </AlertDialogAction>
                )}
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ))}

      </div>
    </div>
  );
}

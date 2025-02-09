'use client'

import Image from "next/image";
import { useState } from "react";
import { DatePickerDemo } from "@/components/ui/date-picker";
import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";
import Link from "next/link";

export default function Yes() {

  const [date, setDate] = useState<Date | undefined>(undefined)


  

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Image 
        src={'/images/ontop.gif'}
        alt="YAYY"
        width={150}      
        height={75}   
      />
    

      <div className="flex gap-4">
        <DatePickerDemo onSelect={setDate} />
     

        {date && (

          <Link href="/dateSetup">
            <Button className="">
              <PawPrint/>
            </Button>
          </Link>
        )}

      </div>

   


    </div>
  );
}

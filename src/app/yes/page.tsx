import Image from "next/image";
import { DatePickerDemo } from "@/components/ui/date-picker";

export default function Yes() {
  return (
    <div className="min-h-screen flex items-center justify-center">

      <Image 
        src={'/images/ontop.gif'}
        alt="YAYY"
        width={150}      
        height={75}   
      />

      <DatePickerDemo/>


    </div>
  );
}

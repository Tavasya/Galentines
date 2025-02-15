import Image from "next/image";


export default function End() {


    
   return(
        <div className="min-h-screen flex flex-col items-center justify-center">
            <Image
                src={"/images/last.gif"}
                alt="Working Hard"
                width={150}
                height={75}
            />

            <h1 className="font-sans bg color-[#1C1018]">Date Set!!!</h1>
        </div>
    )



}
import Image from "next/image";


export default function End() {


    
   return(
        <div className="min-h-screen flex flex-col items-center justify-center">
            <Image
                src={"/images/end.gif"}
                alt="Working Hard"
                width={150}
                height={75}
            />
        </div>
    )



}
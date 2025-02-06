'use client'

import { Progress } from "@/components/ui/progress"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function DateSetup() {
    const [progress, setProgress] = useState(13);

    useEffect(() => {
        const timeout1 = setTimeout(() => setProgress(65), 700);
        const timeout2 = setTimeout(() => setProgress(79), 1300);
        const timeout3 = setTimeout(() => setProgress(100), 2000);

        // Cleanup function to clear timeouts
        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <Image 
                src={'/images/working.gif'}
                alt="Working Hard"
                width={150}
                height={75}
            />

            <Progress value={progress} className="max-w-96" />
        </div>
    );
}

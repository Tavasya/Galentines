"use client"

import { Progress } from "@/components/ui/progress"
import { useState, useEffect } from "react"
import Image from "next/image"
import { AnimatedCircularProgressBar } from "@/components/magicui/animated-circular-progress-bar"

import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
  } from "@/components/magicui/terminal";

export default function DateSetup() {
  const [progress, setProgress] = useState(13)
  const [value, setValue] = useState(0)

  // Step 1: Animate the linear progress bar to 100
  useEffect(() => {
    const t1 = setTimeout(() => setProgress(65), 700)
    const t2 = setTimeout(() => setProgress(79), 1300)
    const t3 = setTimeout(() => setProgress(100), 2000)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  // Step 2: Once linear hits 100, start animating the circular bar
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (progress >= 100) {
      // Reset circular progress to 0 (if desired) before starting
      setValue(0)

      interval = setInterval(() => {
        setValue(prev => {
          // Once circular hits 100, stop.
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          // Increase in steps of 30 up to 100
          return Math.min(prev + 30, 100)
        })
      }, 2000)
    }

    return () => clearInterval(interval)
  }, [progress])

  // Helper booleans for cleaner conditional logic
  const showLinearProgress = progress < 100
  const showCircularProgress = progress >= 100 && value < 100

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Image
        src={"/images/working.gif"}
        alt="Working Hard"
        width={150}
        height={75}
      />

      {showLinearProgress && (
        <Progress value={progress} className="max-w-96 mb-4" />
      )}

      {showCircularProgress && (
        <AnimatedCircularProgressBar
          max={100}
          min={0}
          value={value}
          gaugePrimaryColor="#1C1018"
          gaugeSecondaryColor="rgba(28, 16, 24, 0.1)"
        />
      )}

      {/* After the circular progress hits 100, both bars have disappeared.
          You could display something else here if desired, e.g.: */}
      {!showLinearProgress && !showCircularProgress && (



        <Terminal className="bg-[#1C1018]">
        <TypingAnimation className="font-extrabold text-white">&gt; npm install dateConfig@latest init</TypingAnimation>

        <AnimatedSpan delay={1500} className="text-[#FAB2EA]">
        <span>✔ Pre-date checks.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-[#FAB2EA]">
        <span>✔ Verifying name. Found.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-[#FAB2EA]">
        <span>✔ Validating date.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000} className="text-[#FAB2EA]">
        <span>✔ Validating love percentage.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-[#FAB2EA]">
        <span>✔ Fetching flowers.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-[#FAB2EA]">
        <span>✔ Finding choclates.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4500} className="text-[#FAB2EA]">
        <span>✔ Updating iloveyou.config.ts</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5000} className="text-[#FAB2EA]">
        <span>✔ Updating app/happyvalentines.css</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5500} className="text-[#FAB2EA]">
        <span>✔ Installing dependencies.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={6000} className="text-blue-500">
        <span>ℹ Updated 1 file:</span>
        <span className="pl-2">- lib/utils.ts</span>
        </AnimatedSpan>

        <TypingAnimation delay={6500} className="text-muted-foreground text-[#81E979]">
        Success! Date has been configured.
        </TypingAnimation>

        <TypingAnimation delay={7000} className="text-muted-foreground text-[#81E979]">
        Press Enter to continue.
        </TypingAnimation>

        </Terminal>


      )}
    </div>
  )
}


'use client'

import { getNextTourDate } from "../helpers"

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

export default function Countdown({ children }: { children: React.ReactNode }) {
  
    return (
      <div suppressHydrationWarning>
        <FlipClockCountdown
          labelStyle={{ color: "#000000" }}
          separatorStyle={{ color: "#000000" }}
          digitBlockStyle={{ width: 40, height: 70}}
          to={getNextTourDate()?.date || Date.now()} // Date/Time
         />
      </div>
    )
}
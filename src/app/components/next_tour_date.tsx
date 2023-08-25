
'use client'

import { getNextTourDate } from "../helpers"

export default function NextTourDate({ children }: { children: React.ReactNode }) {
    return (
      <>
      Next Eras Tour City (in your timezone): {getNextTourDate()?.location.city}{getNextTourDate()?.location.state ? ', ' + getNextTourDate()?.location.state : ''}{getNextTourDate()?.location.country ? ', ' + getNextTourDate()?.location.country : ''} @ {getNextTourDate()?.date.toLocaleString()}
      </>
    )
}

'use client'


export default function UserTimezone({ children }: { children: React.ReactNode }) {
    return (
        <div className="z-10 max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="left-0 top-0 flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Your Current Timezone:&nbsp;
          <code className="font-mono font-bold">{Intl.DateTimeFormat().resolvedOptions().timeZone}</code>
        </p>
      </div>
    )
}
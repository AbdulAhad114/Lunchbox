import React from 'react'

export default function LunchboxWay() {
  return (
    <div className="relative h-screen w-full">
      {/* Split background container */}
      <div className="absolute inset-0">
        <div className="flex h-full flex-col md:flex-row">
          <div className="h-[30%] bg-white md:h-full md:w-[38%]" />
          <div className="relative h-[70%] bg-primary-blue md:h-full md:w-[62%]">
            {/* Containers arranged in ) shape */}
            <div className="absolute left-[20%] h-full flex items-center">
              <div className="relative h-[100%] w-[300px]">
                {/* Top-most container */}
                <div className="absolute left-[-26vh] -top-4 h-36 w-32 rotate-[-84deg] rounded-[12px] bg-white [clip-path:polygon(0_18%,100%_0,100%_100%,0_80%)]" />

                {/* Top container */}
                <div className="absolute -left-10 top-[5.0%] h-36 w-32 rotate-[-54deg] rounded-[14px] bg-white [clip-path:polygon(0_18%,100%_0,100%_100%,0_80%)]" />

                {/* Upper middle container */}
                <div className="absolute left-9 top-[20.5%] h-36 w-32 rotate-[-22deg] rounded-[24px] bg-white [clip-path:polygon(0_20%,100%_0,100%_100%,0_80%)]" />

                {/* Middle container */}
                <div className="absolute left-[20%] top-[40%] h-36 w-32 rotate-[1deg] rounded-[24px] bg-white [clip-path:polygon(0_20%,100%_0,100%_100%,0_80%)]" />

                {/* Lower middle container */}
                <div className="absolute left-8 bottom-[17.5vh] h-36 w-32 -rotate-[-28deg] rounded-[24px] bg-white [clip-path:polygon(0_20%,100%_0,100%_100%,0_80%)]" />

                {/* Bottom container */}
                <div className="absolute -left-12 bottom-[2.5vh] h-36 w-32 -rotate-[-54deg] rounded-[14px] bg-white [clip-path:polygon(0_20%,100%_0,100%_100%,0_80%)]" />

                {/* Bottom-most container */}
                <div className="absolute left-[-26vh] -bottom-7 h-36 w-32 -rotate-[-84deg] rounded-[12px] bg-white [clip-path:polygon(0_20%,100%_0,100%_100%,0_80%)]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White circle overlay */}
      <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 md:left-[40%] md:top-1/2">
        <div className="h-16 w-16 rounded-full bg-white md:h-28 md:w-28 lg:h-48 lg:w-48"></div>
      </div>
    </div>
  )
}
"use client";

import { useMemo, useState } from "react";

import Countdown from "./countdown";
import People from "./people";
import { Logo } from "./svgs";
import Form from "./form";

export default function Hero({ waitlistPeople }: { waitlistPeople: number }) {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center justify-center gap-6 mb-6">
        {/* <Logo /> */}

          <div className="flex items-center gap-4 rounded-full border border-border px-4 py-1 relative">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400" />
          </span>
          <p className="uppercase text-sm font-medium">
            available in - November - {2025}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 max-w-2xl">
        <h2 className="text-4xl font-bold text-foreground whitespace-nowrap text-center mb-6">
  Create personalised AI videos in seconds
</h2>
        <p className="text-base text-muted-foreground text-center max-w-md">
          {isSuccess
            ? "You've successfully secured your spot.We’ll hit you up the moment it’s your turn to dive in"
            : "You pick a character -> type a message -> we generate a video."}

{/* Image Cards Section */}
<div className="mt-8 flex flex-nowrap justify-center items-start gap-6 w-full max-w-6xl">
  {/* Card 1 */}
  <div className="rounded-2xl overflow-hidden border shadow-sm bg-white hover:shadow-md transition w-48 aspect-[3/4]">
    <img src="/gallery/one.jpg" alt="Example 1" className="w-full h-full object-cover" />
  </div>

  {/* Card 2 */}
  <div className="rounded-2xl overflow-hidden border shadow-sm bg-white hover:shadow-md transition w-48 aspect-[3/4]">
    <img src="/gallery/two.jpg" alt="Example 2" className="w-full h-full object-cover" />
  </div>

  {/* Card 3 */}
  <div className="rounded-2xl overflow-hidden border shadow-sm bg-white hover:shadow-md transition w-48 aspect-[3/4]">
    <img src="/gallery/three.jpg" alt="Example 3" className="w-full h-full object-cover" />
  </div>

  {/* Card 4 */}
  <div className="rounded-2xl overflow-hidden border shadow-sm bg-white hover:shadow-md transition w-48 aspect-[3/4]">
    <img src="/gallery/four.jpg" alt="Example 4" className="w-full h-full object-cover" />
  </div>

    {/* Card 5 */}
  <div className="rounded-2xl overflow-hidden border shadow-sm bg-white hover:shadow-md transition w-48 aspect-[3/4]">
    <img src="/gallery/five.jpg" alt="Example 5" className="w-full h-full object-cover" />
  </div>

</div>

        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 w-full max-w-md">
        <Form onSuccessChange={setIsSuccess} />
      </div>

<p className="text-sm text-muted-foreground mt-2">
  Enter your e-mail to get notified when we have launched.
</p>


      <div className="flex items-center justify-center gap-2">
        <People count={waitlistPeople} />
      </div>
      <Countdown period={new Date("2025-11-15")} />
    </div>
  );
}

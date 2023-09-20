import Link from 'next/link'
import { v4 as uuid } from 'uuid'

import { JoinRoom, WelcomeContainer } from '../components'

export default function Home() {
  return (
    <WelcomeContainer>
      <div className="mt-5 sm:flex sm:justify-center lg:justify-start">
        <Link href={`/room/${uuid()}`}>
          <button className="rounded bg-[#000] text-white px-2 mr-3">
            Start a video call
          </button>
        </Link>

        <JoinRoom />

      </div>
    </WelcomeContainer>
  )
}

import { useEffect } from 'react';

import { UserIcon } from '@/assets/icons';
import { useSetupMeeting } from '@/hooks';
import { stopTracks } from '@/common/utils'

export default function MeetingRoom() {
  const { videos, peer, stream } = useSetupMeeting()

  useEffect(() => {
    return function cleanup() {
      if (stream === null) return
      stopTracks(stream.getTracks())
    }
  }, [stream])

  return (
    <div className="grid h-screen place-items-center place-content-center">
      {!peer || !stream ? (
        <>
          <span className="animate-ping absolute inline-flex h-32 w-32 rounded-full bg-gray-400 opacity-75 -z-10" />
          <UserIcon className="h-48 w-48" />
        </>
      ) : (
        <>
          <h2 className="mb-8 font-semibold">Meeting topic: something</h2>
          <div className="flex">{videos}</div>
        </>
      )}
    </div>
  );
};
import {
  useCreateVideoStream,
  useSetPeer,
  useGetRoomId,
  useOnOpenPeer,
  usePeerOnJoinRoom,
  usePeerOnAnswer,
  useCreateVideoOnPageOpen,
  usePeerOnLeftRoom,
  useSetVideoStream,
} from '@/hooks'

export default function useSetupMeeting() {
  const roomId = useGetRoomId()

  const { stream } = useCreateVideoStream()

  const { videos, videoRefs, addVideoStream } = useSetVideoStream()

  const { peer, peers, setPeers } = useSetPeer()

  const { me } = useOnOpenPeer({ peer, roomId })

  useCreateVideoOnPageOpen({ stream, id: me, addVideoStream })
  usePeerOnJoinRoom({ peer, stream, addVideoStream, setPeers })
  usePeerOnAnswer({ peer, stream, addVideoStream, setPeers })
  usePeerOnLeftRoom({ peers, videoRefs })

  return { videos, peer, stream }
}

import { useState } from 'react'

import { useAddVideoStream } from '@/hooks'

export default function useSetVideoStream() {
  const [videoRefs, setVideoRefs] = useState<Record<string, HTMLDivElement>>(
    {}
  )
  const [videos, setVideos] = useState<JSX.Element[]>([])


  const addVideoStream = useAddVideoStream({ setVideos, setVideoRefs })

  return { videoRefs, videos, addVideoStream }
}

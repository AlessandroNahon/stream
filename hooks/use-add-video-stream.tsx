import { Dispatch, SetStateAction, useCallback } from 'react'

type Props = {
  setVideoRefs: Dispatch<SetStateAction<Record<string, HTMLDivElement>>>
  setVideos: Dispatch<SetStateAction<JSX.Element[]>>
}

export default function useAddVideoStream({
  setVideoRefs,
  setVideos,
}: Props) {
  const addVideoStream = useCallback((id: string, stream: MediaStream) => {
    if (!id) return

    setVideos((prev: JSX.Element[]) => [
      ...prev,
      <div
        key={id}
        ref={(node) => {
          if (node) setVideoRefs((prev) => ({ ...prev, [id]: node }))
        }}
      >
        <video
          ref={(node) => {
            if (node) node.srcObject = stream
          }}
          className="rounded-3xl max-w-md max-h-80 mr-4"
          muted
          autoPlay
        />
        <p className="font-medium">
          <span className="text-blue-600">{id}</span>
        </p>
      </div>,
    ])
  }, [setVideoRefs, setVideos])

  return addVideoStream
} 

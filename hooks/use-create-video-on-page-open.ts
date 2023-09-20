import { useEffect } from 'react'

export default function useCreateVideoOnPageOpen({
	id,
	stream,
	addVideoStream,
}: {
	id: string
	stream: MediaStream | null
	addVideoStream: (id: string, stream: MediaStream) => void
}) {
	useEffect(() => {
		if (!stream) return

		addVideoStream(id, stream)
	}, [id, addVideoStream, stream])
}

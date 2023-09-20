import { useEffect } from 'react'

type Props = {
	id: string
	stream: MediaStream | null
	addVideoStream: (id: string, stream: MediaStream) => void
}

export default function useCreateVideoOnPageOpen({
	id,
	stream,
	addVideoStream,
}: Props) {
	useEffect(() => {
		if (!stream) return

		addVideoStream(id, stream)
	}, [id, addVideoStream, stream])
}

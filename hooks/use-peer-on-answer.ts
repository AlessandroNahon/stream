import { Dispatch, SetStateAction, useEffect } from 'react'

type Props = {
	peer: any
	stream: MediaStream | null
	addVideoStream: (id: string, stream: MediaStream) => void
	setPeers: Dispatch<SetStateAction<Record<string, any>>>
}

export default function usePeerOnAnswer({
	peer,
	stream,
	addVideoStream,
	setPeers,
}: Props) {
	useEffect(() => {
		if (!peer || !stream) return

		peer.on('call', (call: any) => {
			setPeers((prev: any) => ({ ...prev, [call.peer]: call }))
			console.log('answer call from:', call.peer)

			call.answer(stream)

			call.on('stream', (hostStream: MediaStream) => {
				console.log('answer call stream')
				addVideoStream(call.peer, hostStream)
			})

			call.on('close', () => {
				console.log(`${call.peer} has left the room`)
			})
		})
	}, [peer, stream])
}

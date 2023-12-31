import { Dispatch, SetStateAction, useEffect } from 'react'
import { useSocketContext } from './'

type Props = {
	peer: any
	stream: MediaStream | null
	addVideoStream: (id: string, stream: MediaStream) => void
	setPeers: Dispatch<SetStateAction<Record<string, any>>>
}

export default function usePeerOnJoinRoom({
	stream,
	peer,
	addVideoStream,
	setPeers,
}: Props) {
	const { socket } = useSocketContext()

	useEffect(() => {
		if (!socket || !stream || !peer) return

		socket.on('member-joined', (friendId: string) => {
			const call = peer.call(friendId, stream)
			console.log('call friend with id:', friendId)

			call.on('stream', (friendStream: MediaStream) => {
				console.log('friend stream')
				addVideoStream(friendId, friendStream)
			})

			call.on('close', () => {
				console.log(`${friendId} has left the room`)
			})

			setPeers((prevState) => ({ ...prevState, [friendId]: call }))
		})
	}, [socket, stream, peer])
}

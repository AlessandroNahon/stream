import { useEffect } from 'react'
import { useSocketContext } from './'

type Props = {
	peers: Record<string, any>
	videoRefs: Record<string, HTMLDivElement>
}

export default function usePeerOnLeftRoom({
	peers,
	videoRefs,
}: Props) {
	const { socket } = useSocketContext()

	useEffect(() => {
		if (!socket) return

		socket.on('member-left', (friendId: string) => {
			peers[friendId]?.close()
			videoRefs[friendId]?.remove()
			console.log('LEFT!')
		})
	}, [Object.keys(peers).length, Object.keys(videoRefs).length])
} 

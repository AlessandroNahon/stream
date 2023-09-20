import { useEffect, useState } from 'react'
import useSocketContext from './use-socket-context'

type Props = {
	peer: any
	roomId: string
}

export default function useOnOpenPeer({ peer, roomId }: Props) {
	const [me, setMe] = useState('')
	const { socket } = useSocketContext()

	useEffect(() => {
		if (!peer || !socket) return

		peer.on('open', () => {
			setMe(peer.id)
			socket.emit('join-room', { userId: peer.id, roomId })

			console.log('Your device ID is: ', peer.id)
		})
	}, [peer, socket])

	return { me }
}

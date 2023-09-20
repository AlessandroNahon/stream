import { useEffect, useState } from 'react'

export default function useCreatePeer() {
	const [peer, setPeer] = useState<any>()

	useEffect(() => {
		;(async () => {
			try {
				const PeerJs = (await import('peerjs')).default
				const p = new PeerJs()
				setPeer(p)
			} catch (e) {}
		})()
	}, [])

	return { peer }
}

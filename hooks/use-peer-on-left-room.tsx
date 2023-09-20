import { useEffect } from 'react';
import { useSocketContext } from './';

export default function usePeerOnLeftRoom({
	peers,
	videoRefs,
}: {
	peers: Record<string, any>;
	videoRefs: Record<string, HTMLDivElement>;
}) {
	const { socket } = useSocketContext();

	useEffect(() => {
		if (!socket) return;

		socket.on('member-left', (friendId: string) => {
			peers[friendId]?.close();
			videoRefs[friendId]?.remove();
			console.log('LEFT!')
		});
	}, [Object.keys(peers).length, Object.keys(videoRefs).length]);
};

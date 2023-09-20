import { useRouter } from 'next/router'

export default function useGetRoomId() {
	const router = useRouter()
	const { roomId: roomId } = router.query as { roomId: string }
	return roomId
}

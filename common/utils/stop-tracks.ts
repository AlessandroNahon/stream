export default function stopTracks(tracks: MediaStreamTrack[]) {
	if (!tracks) return

	tracks.forEach((track) => {
		track.stop()
	})
}

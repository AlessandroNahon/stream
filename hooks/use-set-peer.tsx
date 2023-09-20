import { useState } from 'react';

import { useCreatePeer } from '@/hooks';

export default function useSetPeer() {
  const [peers, setPeers] = useState<Record<string, any>>({});
  const { peer } = useCreatePeer();

  return { peers, peer, setPeers }
}
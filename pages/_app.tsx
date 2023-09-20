import { useState } from 'react';
import type { AppProps } from 'next/app';

import { SocketContext } from '@/hooks/use-socket-context';
import { TSocket } from '@/common/types';

import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [socket, setSocket] = useState<TSocket | null>(null);

  return (
    <SocketContext.Provider value={{ socket, setSocket }}>
      <Component {...pageProps} />
    </SocketContext.Provider>
  );
}
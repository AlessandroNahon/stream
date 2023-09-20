import { useState } from 'react'
import { useRouter } from 'next/router'

import { JoinButton } from '../style';

export default function JoinRoom() {
  const [code, setCode] = useState<string | null>()
  const router = useRouter()

  function onSubmit() {
    router.push(`room/${code}`)
  }

  return (
    <div className="rounded border border-gray-400 rounded-md mr-3 px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
      <label htmlFor="name" className="block text-xs font-medium text-gray-900">
        Enter meeting code
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="block w-full p-0 text-gray-900 placeholder-gray-500 sm:text-sm"
        onChange={(e) => setCode(e.target.value)}
      />
      <JoinButton onClick={() => onSubmit()}>Join</JoinButton>
    </div>
  );
};

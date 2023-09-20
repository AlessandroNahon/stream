import { render, screen } from '@testing-library/react'
import JoinRoom from '../../../components/join-room'

describe('JoinRoom', () => {
  const useRouter = jest.spyOn(require("next/router"), "useRouter");

  const pushMock = jest.fn()

  useRouter.mockReturnValue({
    query: {},
    push: pushMock,
  })

  it('renders the JoinRoom input component', () => {
    render(<JoinRoom />)

    const labelText = screen.getByLabelText('Enter meeting code').previousElementSibling!.innerHTML

    expect(labelText).toBe('Enter meeting code')
  })
})
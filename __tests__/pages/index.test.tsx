import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'
import '@testing-library/jest-dom'



describe('Home', () => {
	const useRouter = jest.spyOn(require("next/router"), "useRouter");

	const pushMock = jest.fn()

	useRouter.mockReturnValue({
		query: {},
		push: pushMock,
	})

	it('renders the Home page', () => {
		render(<Home />)

		const button = screen.getByRole('button', {
			name: 'Start a video call',
		})

		expect(button.innerHTML).toEqual('Start a video call')
	})
})

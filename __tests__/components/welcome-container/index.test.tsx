import { render, screen } from '@testing-library/react'
import WelcomeContainer from '../../../components/welcome-container'

describe('WelcomeContainer', () => {
  it('renders the WelcomeContainer wrapper', () => {
    render(<WelcomeContainer>test</WelcomeContainer>)

    const welcomeText = screen.getByText('For secure business and friendly meetings.').innerHTML

    expect(welcomeText).toBe('For secure business and friendly meetings.')
  })
})
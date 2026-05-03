import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from './Hero'
import React from 'react'

describe('Hero Component', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText(/The Ultimate/i)).toBeInTheDocument()
    expect(screen.getByText(/River Experience/i)).toBeInTheDocument()
  })

  it('renders the explore button with correct link', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /Explore Routes/i })
    expect(link).toHaveAttribute('href', '/destinations')
  })

  it('renders the brand tag', () => {
    render(<Hero />)
    expect(screen.getByText(/Private & Exclusive/i)).toBeInTheDocument()
  })
})

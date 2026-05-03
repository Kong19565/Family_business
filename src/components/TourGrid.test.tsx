import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TourGrid from './TourGrid'
import React from 'react'

describe('TourGrid Component', () => {
  it('renders the heading', () => {
    render(<TourGrid />)
    expect(screen.getByText('Discover the River')).toBeInTheDocument()
  })

  it('renders all tours', () => {
    render(<TourGrid />)
    // Based on data.ts, we have at least 2 tours in the 'tours' array
    expect(screen.getByText('1-Hour Scenic Canal Tour')).toBeInTheDocument()
    expect(screen.getByText('2-Hour Heritage & Art Tour')).toBeInTheDocument()
  })

  it('contains "Join Trip" buttons for each tour', () => {
    render(<TourGrid />)
    const buttons = screen.getAllByText('Join Trip')
    expect(buttons.length).toBeGreaterThanOrEqual(2)
  })
})

import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import MapSection from './MapSection'
import React from 'react'

describe('MapSection Component', () => {
  it('renders the default map location (Talat Phlu)', () => {
    render(<MapSection />)
    expect(screen.getByText('Talat Phlu Pier (Wat Paknam)')).toBeInTheDocument()
    expect(screen.getByText('Parking Available')).toBeInTheDocument()
  })

  it('switches to Wutthakat Pier when clicked', () => {
    render(<MapSection />)
    
    const wutthakatBtn = screen.getByText('BTS Wutthakat')
    fireEvent.click(wutthakatBtn)
    
    expect(screen.getByText('BTS Wutthakat Pier')).toBeInTheDocument()
    // Parking is only shown for Talat Phlu in the component logic
    expect(screen.queryByText('Parking Available')).not.toBeInTheDocument()
  })
})

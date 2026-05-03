import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from './Footer'
import React from 'react'

describe('Footer Component', () => {
  it('renders the contact header', () => {
    render(<Footer />)
    expect(screen.getByText('Contact Our Concierge')).toBeInTheDocument()
  })

  it('shows the phone selection popup when "Call Directly" is clicked', () => {
    render(<Footer />)
    
    // Check that the popup is NOT visible initially
    expect(screen.queryByText('Select a Number')).not.toBeInTheDocument()
    
    // Click the "Call Directly" button
    const callButton = screen.getByText('Call Directly')
    fireEvent.click(callButton)
    
    // Now the popup should be visible
    expect(screen.getByText('Select a Number')).toBeInTheDocument()
    expect(screen.getByText('098-828-9849')).toBeInTheDocument()
  })

  it('closes the phone selection popup when X or Close is clicked', () => {
    render(<Footer />)
    
    // Open the popup
    fireEvent.click(screen.getByText('Call Directly'))
    expect(screen.getByText('Select a Number')).toBeInTheDocument()
    
    // Click "Close"
    fireEvent.click(screen.getByText('Close'))
    
    // Popup should be gone
    expect(screen.queryByText('Select a Number')).not.toBeInTheDocument()
  })
})

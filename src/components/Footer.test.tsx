import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Footer from './Footer'
import React from 'react'

// Mock framer-motion to avoid animation issues in tests
vi.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

describe('Footer Component', () => {
  it('renders the contact header', () => {
    render(<Footer />)
    expect(screen.getByText(/Connect/i)).toBeInTheDocument()
    expect(screen.getByText(/With Us/i)).toBeInTheDocument()
  })

  it('shows the phone selection popup when "DIRECT CALL" is clicked', () => {
    render(<Footer />)
    
    // Check that the popup is NOT visible initially
    expect(screen.queryByText('Contact Numbers')).not.toBeInTheDocument()
    
    // Click the "DIRECT CALL" button
    const callButton = screen.getByText('DIRECT CALL')
    fireEvent.click(callButton)
    
    // Now the popup should be visible
    expect(screen.getByText('Contact Numbers')).toBeInTheDocument()
    expect(screen.getByText('098-828-9849')).toBeInTheDocument()
  })

  it('closes the phone selection popup when Close Window is clicked', () => {
    render(<Footer />)
    
    // Open the popup
    fireEvent.click(screen.getByText('DIRECT CALL'))
    expect(screen.getByText('Contact Numbers')).toBeInTheDocument()
    
    // Click "Close Window"
    fireEvent.click(screen.getByText('Close Window'))
    
    // Popup should be gone
    expect(screen.queryByText('Contact Numbers')).not.toBeInTheDocument()
  })
})

import { describe, it, expect } from 'vitest'
import { tours, fleet, allDestinations } from './data'

describe('Data Constants', () => {
  it('should have a list of tours', () => {
    expect(tours.length).toBeGreaterThan(0)
    expect(tours[0]).toHaveProperty('id')
    expect(tours[0]).toHaveProperty('title')
  })

  it('should have a list of fleet vessels', () => {
    expect(fleet.length).toBeGreaterThan(0)
    expect(fleet[0]).toHaveProperty('name')
    expect(fleet[0]).toHaveProperty('capacity')
  })

  it('should have detailed destinations matching tour IDs', () => {
    const tourIds = tours.map(t => t.id)
    const destinationIds = allDestinations.map(d => d.id)
    
    tourIds.forEach(id => {
      expect(destinationIds).toContain(id)
    })
  })
})

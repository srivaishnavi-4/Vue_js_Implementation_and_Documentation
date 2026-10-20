import { describe, it, expect } from 'vitest'
import { validateStudent } from './studentValidation'

describe('validateStudent', () => {
  it('accepts valid student details', () => {
    expect(
      validateStudent({
        name: 'Vaishu',
        email: 'vaishu@example.com'
      })
    ).toEqual([])
  })

  it('rejects an empty name', () => {
    expect(
      validateStudent({
        name: '',
        email: 'vaishu@example.com'
      })
    ).toContain('Name is required')
  })

  it('rejects an invalid email', () => {
    expect(
      validateStudent({
        name: 'Vaishu',
        email: 'invalid-email'
      })
    ).toContain('Email is invalid')
  })
})
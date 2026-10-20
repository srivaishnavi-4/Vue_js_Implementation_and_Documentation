export interface StudentInput {
  name: string
  email: string
}

export function validateStudent(input: StudentInput): string[] {
  const errors: string[] = []

  if (!input.name.trim()) {
    errors.push('Name is required')
  }

  if (!input.email.trim()) {
    errors.push('Email is required')
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    errors.push('Email is invalid')
  }

  return errors
}
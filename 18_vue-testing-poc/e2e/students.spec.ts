import { test, expect } from '@playwright/test'

test('user can add and remove a student', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: 'Student Management' })
  ).toBeVisible()

  await page.getByLabel('Name').fill('Vaishu')
  await page.getByLabel('Email').fill('vaishu@example.com')

  await page.getByRole('button', { name: 'Add Student' }).click()

  await expect(page.getByText('Total students: 1')).toBeVisible()
  await expect(page.getByText('vaishu@example.com')).toBeVisible()

  await page.getByRole('button', { name: 'Remove' }).click()

  await expect(page.getByText('Total students: 0')).toBeVisible()
  await expect(page.getByText('No students added yet.')).toBeVisible()
})

test('user sees validation errors for invalid details', async ({ page }) => {
  await page.goto('/')

  await page.getByLabel('Email').fill('invalid-email')
  await page.getByLabel('Name').fill('Vaishu')

  await page.getByRole('button', { name: 'Add Student' }).click()

  await expect(page.getByRole('alert')).toContainText('Email is invalid')
  await expect(page.getByText('Total students: 0')).toBeVisible()
})
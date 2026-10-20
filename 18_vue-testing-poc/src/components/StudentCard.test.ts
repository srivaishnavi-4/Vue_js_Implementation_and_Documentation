import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StudentCard from './StudentCard.vue'

describe('StudentCard', () => {
  const student = {
    id: 101,
    name: 'Vaishu',
    email: 'vaishu@example.com'
  }

  it('renders student information', () => {
    const wrapper = mount(StudentCard, {
      props: { student }
    })

    expect(wrapper.text()).toContain('Vaishu')
    expect(wrapper.text()).toContain('vaishu@example.com')
  })

  it('emits the student ID when Remove is clicked', async () => {
    const wrapper = mount(StudentCard, {
      props: { student }
    })

    await wrapper.get('button').trigger('click')

    expect(wrapper.emitted('remove')).toEqual([[101]])
  })
})
import { mount } from '@vue/test-utils'

import navbar from '@/components/navbar.vue'

describe('navbar', () => {
  const wrapper = mount(navbar)

  it('renders successfully', () => expect(wrapper.vm).toBeTruthy())

  it("has the data object 'isActive'", () => {
    expect(wrapper.vm.isActive).toBe(false)
  })
})

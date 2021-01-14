import { mount } from '@vue/test-utils'

import index from '@/pages/index.vue'
import navbar from '@/components/navbar.vue'

describe('index', () => {
  const wrapper = mount(index)

  it('renders successfully', () => expect(wrapper.vm).toBeTruthy())

  it('renders the navbar', () =>
    expect(wrapper.findComponent(navbar).exists()).toBe(true))
})

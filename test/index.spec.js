import { shallowMount } from '@vue/test-utils'

import index from '@/pages/index.vue'
import Navbar from '~/components/Navbar.vue'

describe('index', () => {
  const wrapper = shallowMount(index)

  it('renders successfully', () => expect(wrapper.vm).toBeTruthy())

  it('renders the navbar', () =>
    expect(wrapper.findComponent(Navbar).exists()).toBe(true))
})

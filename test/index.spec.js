import { shallowMount } from '@vue/test-utils'

import index from '@/pages/index.vue'

describe('index', () => {
  const wrapper = shallowMount(index)

  it('renders successfully', () => expect(wrapper.vm).toBeTruthy())
})

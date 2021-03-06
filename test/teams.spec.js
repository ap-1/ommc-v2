import { shallowMount } from '@vue/test-utils'

import teams from '@/pages/teams.vue'

describe('index', () => {
  const wrapper = shallowMount(teams)

  it('renders successfully', () => expect(wrapper.vm).toBeTruthy())
})

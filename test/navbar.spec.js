import { shallowMount } from '@vue/test-utils'
import Navbar from '~/components/Navbar.vue'

describe('navbar', () => {
  const { vm } = shallowMount(Navbar)

  it('renders successfully', () => expect(vm).toBeTruthy())

  it("has the data object 'isActive' set to false", () => {
    expect(vm.isActive).toBe(false)
  })
})

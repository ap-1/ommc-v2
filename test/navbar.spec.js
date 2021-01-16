import { shallowMount } from '@vue/test-utils'
import navbar from '@/components/navbar.vue'

describe('navbar', () => {
  const { vm } = shallowMount(navbar)

  it('renders successfully', () => expect(vm).toBeTruthy())

  it("has the data object 'isActive' set to false", () => {
    expect(vm.isActive).toBe(false)
  })
})

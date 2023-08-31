import Navbar from '../components/Navbar/Navbar.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof Navbar> = {
  component: Navbar,
}

export default meta
type Story = StoryObj<typeof Navbar>

export const Primary: Story = {}

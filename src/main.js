import { mount } from 'svelte'
import './app.css'
import Apa from './App.svelte'

const app = mount(Apa, {
  target: document.getElementById('app'),
})

export default app

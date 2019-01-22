import { configure } from '@storybook/react'

import '../src/styles.css'

function loadStories() {
  const req = require.context('../src/', true, /.stories.js$/)
  const files = req.keys()
  files.sort().forEach(filename => req(filename))
}

configure(loadStories, module);

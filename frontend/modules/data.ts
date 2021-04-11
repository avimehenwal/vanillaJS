import { updateMainView } from './Utility.js'
import { VP1 } from './VP1.js'

export let projects = [
  {
    "title": "Project One",
    "cb": () => updateMainView(VP1)
  },
  {
    "title": "Project Two",
    "cb": () => updateMainView(VP1)
  },
]


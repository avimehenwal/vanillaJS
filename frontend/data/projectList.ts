import { VP1 } from '../modules/VP1.js'
import { updateMainView } from '../modules/Utility.js'


export let projects = {
  "1": {
    "title": "Project One",
    "cb": () => updateMainView(VP1)
  },
  "2": {
    "title": "Project Two"
  },
}

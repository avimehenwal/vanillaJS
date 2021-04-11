import { VP1 } from '../modules/VP1.js';
import { updateMainView } from '../modules/Utility.js';
export var projects = {
    "1": {
        "title": "Project One",
        "cb": function () { return updateMainView(VP1); }
    },
    "2": {
        "title": "Project Two"
    },
};

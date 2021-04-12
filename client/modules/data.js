import { updateMainView } from './Utility.js';
import { VP1 } from './VP1.js';
export var projects = [
    {
        "title": "Project One",
        "cb": function () { return updateMainView(VP1); }
    },
    {
        "title": "Project Two",
        "cb": function () { return updateMainView(VP1); }
    },
];
//# sourceMappingURL=data.js.map
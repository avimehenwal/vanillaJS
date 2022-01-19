export function addScriptAsModuleToBody(srcFileName) {
    var scriptTag = document.createElement("script");
    scriptTag.type = "module";
    scriptTag.src = "modules/" + srcFileName;
    document.body.appendChild(scriptTag);
    return scriptTag;
}
//# sourceMappingURL=Utility.js.map
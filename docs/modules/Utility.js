export function addScriptAsModuleToBody(srcFileName) {
    var scriptTag = document.createElement("script");
    scriptTag.type = "module";
    scriptTag.src = "modules/" + srcFileName;
    document.body.appendChild(scriptTag);
    return scriptTag;
}
export function updateMainView(ViewMainFn) {
    var main = document.getElementById('main');
    // todo: add fadeOut animation
    main === null || main === void 0 ? void 0 : main.classList.add('removing');
    setTimeout(function () {
        main === null || main === void 0 ? void 0 : main.classList.remove("removing");
    }, 1500);
    // @ts-ignore */
    main === null || main === void 0 ? void 0 : main.innerHTML = '';
    main === null || main === void 0 ? void 0 : main.appendChild(ViewMainFn());
}

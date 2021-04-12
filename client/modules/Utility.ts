export function addScriptAsModuleToBody(srcFileName: string): HTMLElement {
  let scriptTag = document.createElement("script")
  scriptTag.type = "module"
  scriptTag.src = "modules/" + srcFileName
  document.body.appendChild(scriptTag)
  return scriptTag
}

export function updateMainView(ViewMainFn) {
  let main = document.getElementById('main')
  // todo: add fadeOut animation
  main?.classList.add('removing')
  setTimeout(() => {
    main?.classList.remove("removing");
  }, 1500);
  // @ts-ignore */
  main?.innerHTML = ''
  main?.appendChild(ViewMainFn())
}

export function addScriptAsModuleToBody(srcFileName: string): HTMLElement {
  let scriptTag = document.createElement("script")
  scriptTag.type = "module"
  scriptTag.src = "modules/" + srcFileName
  document.body.appendChild(scriptTag)
  return scriptTag
}

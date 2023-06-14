function getEditor(id){
  const txtCode = ace.edit(id);

txtCode.setTheme("ace/theme/monokai");
txtCode.getSession().setMode("ace/mode/java");
txtCode.setOptions({
  fontFamily: "monospace",
  fontSize: "14px",
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: false,
  useWorker: false,
  showPrintMargin: false,
  tabSize: 2,
});
}

const EditorId=["editorjava1", "editorjava2"];
for (let i = 0; i < EditorId.length; i++) {
  const element = EditorId[i];
  getEditor(element)
}
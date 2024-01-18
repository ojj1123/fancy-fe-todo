export function createEditorTemplate(
  title = "",
  content = "",
  isEditMode = false
) {
  return `
    <input class="title" type="text" placeholder="제목을 입력하세요." value="${
      title || ""
    }" required></input>
    <input class="content" type="text" placeholder="내용을 입력하세요." value="${
      isEditMode ? content : ""
    }" required></input>
    <div class="btnbox">
        <button class="cancel">취소</button>
        <button class="${isEditMode ? "save" : "register"}">${
    isEditMode ? "저장" : "등록"
  }</button>
    </div>
  `;
}

export function createCardInfoTemplate(title, content) {
  return `
    <div class="cardInfo">
        <span class="registeredTitle">${title}</span>
        <span class="registeredContent">${content}</span>
        <span style="font-size: 10px; margin-top: 10px"> author by Web </span> 
    </div>
    <div class="editor">
        <span id="delete"><i class="fa-solid fa-xmark"></i></span>
        <span id="edit"><i class="fa-solid fa-pen"></i></span>
    </div>
  `;
}
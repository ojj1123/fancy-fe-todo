import todoList from "../todoList";
import styles from "./todoListTable.module.scss";
import { getTodoList } from "../../utils/API/todoList";

export default function todoListTable(parent, props) {
  //행 + 데이터를 모두 감싸고 있는 컨테이너 (테이블)
  parent.innerHTML = `
    <div todo-data="todoListTable" class="${styles.todoListTable}">
    </div>
    `;

  //데이터 API호출 후, 각 todoList에 넣어서 각각 만들어주고 그것을 마운트해준다.
  const todoListTable = parent.querySelector('[todo-data="todoListTable"]');
  getTodoList().then((todoData) => {
    const todoDataEntries = Object.entries(todoData);
    for (const [todoColName, todoColData] of todoDataEntries) {
      const container = document.createElement("div");
      todoList(container, { title: todoColName, items: todoColData });
      todoListTable.appendChild(container);
    }
  });
}

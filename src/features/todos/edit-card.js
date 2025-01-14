import { observableStore, store } from "../../store/index.js";
import { checkedFetch } from "../../utils/checked-fetch.js";
import { initializeCardsThunk } from "./initialize-cards.js";

export const editCard = async ({ data, select, onChange }) => {
  const unsubscribe = observableStore(store, select, onChange);
  await store.dispatch(editCardThunk(data));
  unsubscribe(onChange);
};

const editCardThunk = ({ columnId, cardId, title, description, author }) => {
  return (dispatch) => {
    return checkedFetch(`http://localhost:8000/todos/${columnId}/${cardId}`, {
      method: "PUT",
      body: JSON.stringify({ title, description, author }),
    })
      .then(() => dispatch(initializeCardsThunk()))
      .catch(console.error);
  };
};

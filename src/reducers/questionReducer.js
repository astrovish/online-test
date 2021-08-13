const qa = [
  {
    "id": 1,
    "question": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "answer": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "id": 2,
    "question": "qui est esse",
    "answer": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "id": 3,
    "question": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "answer": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  }
];

export const questionReducer = (state = qa, action) => {
  const { type, payload } = action;
  switch(type) {
    case 'UPDATE_ANSWER':
      // get the id and selected answer of the question
      // and update the question
      return state;
    default:
      return state;
  }
}

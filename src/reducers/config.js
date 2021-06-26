const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state.map((item, index) =>
        index === action.payload
          ? { ...item, priority: item.priority + 1 }
          : item
      );
    case "decrement":
      return state.map((item, index) =>
        index === action.payload
          ? {
              ...item,
              priority: item.priority > 1 ? item.priority - 1 : 1,
            }
          : item
      );
    case "set_domain":
      return state.map((item, index) =>
        index === action.payload.index
          ? { ...item, domain: action.payload.domain }
          : item
      );
    case "add_item":
      return [...state, action.payload];
    case "remove_item":
      return state.filter((item, index) => index !== action.payload);
    case "set_text_field":
      return state.map((item, index) => {
        if (action.payload.index !== index) return item;
        return { ...item, domain: action.payload.domain };
      });
    default:
      return state;
  }
};
export default reducer;

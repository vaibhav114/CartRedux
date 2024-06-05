import { ACTIONS } from "../context/useCart";

export const cartReducer = (state, action) => {
  if (action.type == ACTIONS.increase) {
    let extra = 0;
    const newState = state.items.map((itm) => {
      if (itm.id == action.payload) {
        extra = extra + parseInt(itm.price, 10);
        return {
          ...itm,
          amount: itm.amount + 1,
        };
      }
      return itm;
    });
    return { ...state, items: newState, totalAmt: state.totalAmt + extra };
  }
  if (action.type == ACTIONS.decrease) {
    let extra = 0;
    const newState = state.items
      .map((itm) => {
        if (itm.id == action.payload) {
          extra = extra + parseInt(itm.price, 10);
          return {
            ...itm,
            amount: itm.amount - 1,
          };
        }
        return itm;
      })
      .filter((itm) => itm.amount != 0);

    return { ...state, items: newState, totalAmt: state.totalAmt - extra };
  }

  if (action.type == ACTIONS.clear) {
    return {
      items: [],
      totalItems: 0,
      totalAmt: 0,
    };
  }

  if (action.type == ACTIONS.remove) {
    let extra = 0;
    let newState = state.items.filter((itm) => {
      if (itm.id == action.payload) {
        extra = parseInt(itm.price, 10) * itm.amount;
      }
      return itm.id != action.payload;
    });
    return {
      ...state,
      items: newState,
      totalAmt: state.totalAmt - parseInt(extra, 10),
    };
  }
  return state;
};

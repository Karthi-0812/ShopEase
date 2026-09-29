export const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  errors: {},
  submitted: false,
};

export function contactReducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.name]: action.value,
      };

    case "ERROR":
      return {
        ...state,
        errors: action.errors,
        submitted: false,
      };

    case "SUBMIT":
      return {
        ...state,
        errors: {},
        submitted: true,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}
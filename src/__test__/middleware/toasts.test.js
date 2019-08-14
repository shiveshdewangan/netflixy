import toastMiddleware from "../../middleware/toasts";
import { SHOW_TOAST } from "../../constants/actionTypes";
import { toast } from "react-toastify";
import { reactToastifyDefaultOptions } from "../../middleware/toasts";

// lib mock
jest.mock("react-toastify");

describe("toast middleware", () => {
  //this is a regular function and you can write normal Javascript.
  let next, dispatch, getState, middleware;

  beforeEach(() => {
    next = jest.fn();
    dispatch = jest.fn();
    getState = jest.fn();
    middleware = toastMiddleware({ getState, dispatch })(next);
  });

  test("moves on to the next middleware / reducer", () => {
    // action with a shape the middleware recognizes
    const toastAction = {
      type: SHOW_TOAST,
      payload: { message: "", type: "" }
    };
    // invoke inner middleware function
    middleware(toastAction);
    expect(next).toBeCalledWith(toastAction);
  });

  test("handles only action type SHOW_TOAST", () => {
    // action with a type the middleware shouldn't recognize
    const toastAction = {
      type: "",
      payload: { message: "", type: "" }
    };
    middleware(toastAction);

    //make assertion
    expect(toast.mock.calls.length).toBe(1);
  });

  test("handles SHOW_TOAST correctly", () => {
    const toastAction = {
      type: SHOW_TOAST,
      payload: { message: "", type: "" }
    };
    middleware(toastAction);

    expect(toast.mock.calls.length).toBe(2);
    expect(toast).lastCalledWith("", {
      ...reactToastifyDefaultOptions,
      type: ""
    });
  });
});

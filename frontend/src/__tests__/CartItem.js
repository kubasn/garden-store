import { Provider } from "react-redux";
import { render, cleanup, screen } from "@testing-library/react";
import { createMockStore } from "redux-test-utils";
import { CartItem } from "../components";

afterEach(cleanup);

let item = {
  id: 1,
  imageUrl: "image.png",
  title: "Product Title",
  price: "$10",
  qty: 2,
};

describe("myComponent", () => {
  let store;
  beforeEach(() => {
    store = createMockStore({
      cart: {
        items: {
          id: 1,
          imageUrl: "image.png",
          title: "Product Title",
          price: "10",
          qty: 2,
        },
      },
      user: {
        uid: 123,
        name: "Mark",
      },
    });
  });

  it("renders correctly", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <CartItem />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("dispatches an action on button click", () => {
    const { getByText, getByRole, container } = render(
      <Provider store={store}>
        <CartItem {...item} />
      </Provider>
    );
    setTimeout(() => {}, 1000);
    screen.debug();

    const el = getByText(item.title);
    const title = getByText(new RegExp(item.title));
    // const price = getByText(new RegExp(item.price));
    const qty = getByText(new RegExp(item.qty));
  });
});

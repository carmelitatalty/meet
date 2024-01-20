import { loadFeature, defineFeature } from "jest-cucumber";
import { render, waitFor, within } from "@testing-library/react";
import App from "../App";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 events are shown by default", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("when starting the app", () => {
      AppComponent = render(<App />);
    });

    when("not changing specified number to show", () => {});

    then("a list should render 32 events by default", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems).toHaveLength(32);
      });
    });
  });

  test("User can change the number of events displayed", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    const numOfEvents = 3;
    given("when starting the app", () => {
      AppComponent = render(<App />);
    });

    when("user changes the textbox for numbe of events to show", async () => {
        const user = userEvent.setup();
        await waitFor(() => {
            const numberOfEventsTextBox = AppComponent.getByTitle("number-of-events");
            user.type(numberOfEventsTextBox, `{backspace}{backspace}${numOfEvents}`)
        });
    });
    then("list should render the specified number of events", async () => {
           
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems).toHaveLength(numOfEvents);
      });
    });
  });
});

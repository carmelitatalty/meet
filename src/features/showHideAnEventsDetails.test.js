import { loadFeature, defineFeature } from "jest-cucumber";
import { render, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    let AppComponent;
    given("a user opens the app", () => {
      AppComponent = render(<App />);
    });

    when("the user doesn't click on the show details buttons", async () => {});

    then("user should see the event details collapsed", () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector(".details");
      expect(details).not.toBeInTheDocument();
    });
  });

  test("User can expand an event to see details", ({
    given,
    when,
    and,
    then,
  }) => {
    let AppComponent;
    given("a user opens the app", async () => {
      AppComponent = render(<App />);
    });
    and("event is not expanced to show details", () => {
      const details = AppComponent.queryByRole("article");
      expect(details).not.toBeInTheDocument();
    });

    when("user clicks on more details", async () => {
      const user = userEvent.setup();

      await waitFor(async () => {
        const button = AppComponent.queryAllByText("Show Detail")[0];
        expect(button).toBeInTheDocument();
        await user.click(button);
      });
    });

    then("additional details should be displayed", async () => {
      await waitFor(() => {
        const details = AppComponent.queryByRole("article");
        expect(details).toBeInTheDocument();
      });
    });
  });

  test("User can collapse an event to hide details", async ({
    given,
    when,
    and,
    then,
  }) => {
    let AppComponent;
    given("a user opens the app", async () => {
      AppComponent = render(<App />);
    });
    and("event details are showing", async () => {
      const user = userEvent.setup();

      await waitFor(async () => {
        const button = AppComponent.queryAllByText("Show Detail")[0];
        expect(button).toBeInTheDocument();
        await user.click(button);
      });
      await waitFor(() => {
        const details = AppComponent.queryByRole("article");
        expect(details).toBeInTheDocument();
      });
    });

    when("user clicks on hide details", async () => {
      const user = userEvent.setup();

      await waitFor(async () => {
        const button = AppComponent.queryAllByText("Hide Detail")[0];
        expect(button).toBeInTheDocument();
        await user.click(button);
      });

      const details = AppComponent.queryByRole("article");
      expect(details).not.toBeInTheDocument();
    });

    then("hide the additional details", () => {
    });
  });
});

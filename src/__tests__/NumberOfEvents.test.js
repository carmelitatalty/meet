import { render } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from '@testing-library/user-event';

describe ("<NumberOfEvents /> component", () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
      NumberOfEventsComponent = render(<NumberOfEvents />);
    });
    test('have an element with textbox role', () => {
        const numberOfEventsTextBox = NumberOfEventsComponent.queryByRole('textbox');
        expect(numberOfEventsTextBox).toBeInTheDocument();
      
      });
      
    test('have a default of 32 events', () => {
        const numberOfEventsTextBox = NumberOfEventsComponent.queryByRole('textbox');
        expect(numberOfEventsTextBox.value).toBe("32");

      
      });

    
      
    test('textbox has a value that changes accordingly when user is typing', async () => {
        const user = userEvent.setup();
        const numberOfEventsTextBox = NumberOfEventsComponent.queryByRole('textbox');
        expect(numberOfEventsTextBox.value).toBe("32");
        await user.type(numberOfEventsTextBox, '{backspace}{backspace}10');
    });
 
    })
import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Event from "../components/Event";
import { getEvents } from "../api";

describe("<Event /> component", () => {
    let EventComponent;
    beforeEach(() => {
      EventComponent = render(<Event />);
    });

    test('Event renders', async() => {
        const eventItem = EventComponent.queryByRole('listitem')
        expect(eventItem).toBeInTheDocument();
    })

    // test('Event renders content properly', async() => {
    //     const allEvents = await getEvents();
    //     const event = allEvents[0]
    //     EventComponent.rerender(<Event event={event} />);
    //     expect(EventComponent.getByTitle('eventSummary').textContent).toBe(event.summary);
    //     // const EventComponentContainer = EventComponent.container.firstChild
    //     // expect(EventComponentContainer.querySelector('.eventSummary').innerText).toBe(event.summary)
    //     // expect(EventComponentC)
    // })

    test('Event details hidden by default', async () => {
        
        const allEvents = await getEvents();
        const event = allEvents[0]
        EventComponent.rerender(<Event event={event} />);
        const details = EventComponent.queryByRole('article');
        expect(details).not.toBeInTheDocument();
    })

    test('Event expands to show details when button clicked', async () => {
        const user = userEvent.setup();
        const allEvents = await getEvents();
        const event = allEvents[0]
        EventComponent.rerender(<Event event={event} />);
        
        const detailsButton = EventComponent.queryByRole('button');
        expect(detailsButton).toBeInTheDocument()
        await user.click(detailsButton)

        const details = EventComponent.queryByRole('article');
        expect(details).toBeInTheDocument();        
    })


    test('Event collapes to show less details when button clicked', async () => {
        const user = userEvent.setup();
        const allEvents = await getEvents();
        const event = allEvents[0]
        EventComponent.rerender(<Event event={event} />);
        
        const detailsButton = EventComponent.queryByRole('button');
        expect(detailsButton).toBeInTheDocument()
        await user.click(detailsButton)

        const hideDetailsButton = EventComponent.queryByRole('button');
        expect(hideDetailsButton).toBeInTheDocument()
        await user.click(hideDetailsButton)

        const details = EventComponent.queryByRole('article');
        expect(details).not.toBeInTheDocument();        
    })

})
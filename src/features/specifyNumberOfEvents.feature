Feature: Specify Number of Events
    Scenario: When user hasn’t specified a number, 32 events are shown by default
        Given when starting the app
        When not changing specified number to show
        Then a list should render 32 events by default

Scenario: User can change the number of events displayed
        Given when starting the app
        When user changes the textbox for numbe of events to show 
        Then list should render the specified number of events
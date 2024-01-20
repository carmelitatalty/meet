Feature: Show/Hide Event Details
    Scenario: An event element is collapsed by default
        Given a user opens the app
        When the user doesn't click on the show details buttons
        Then user should see the event details collapsed

    Scenario: User can expand an event to see details
        Given a user opens the app
        And event is not expanced to show details
        When user clicks on more details
        Then additional details should be displayed

    Scenario: User can collapse an event to hide details
        Given a user opens the app
        And event details are showing
        When user clicks on hide details
        Then hide the additional details
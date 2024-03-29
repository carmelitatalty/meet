# meet

## Feature 1: Filter Events By City
### Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.

As a user
I should see all upcoming events in all cities by default
so that you see events from all over

### Scenario 2: User should see a list of suggestions when they search for a city.
As a user
I should see suggestions on city names when searching
so that it is easier to find the right city

### Scenario 3: User can select a city from the suggested list

As a user
I Should be able to select a city from the suggested list
so that I don't have to type the full name of the city

## Feature 2: Show/Hide Event Details
### User story 2.1: An event element is collapsed by default.

As a user
I should see the event element collapsed
so that it's easier to see all basic event information.

### User story 2.2: User can expand an event to see details.

As a user
I should be able to expand an event to see details.
so that I can see more details on the event.

### User story 2.3: User can collapse an event to hide details.

As a user 
I should be able to collapse an event to hide details
so I can see more events at once.

## Feature 3: Specify Number of Events
### User story 3.1: When user hasn’t specified a number, 32 events are shown by default.

As a user
I should be able to see 32 events by default
so that I am not overwhelmed with events.

### User story 3.2: User can change the number of events displayed.

As a user 
I should be able to change how many events are displayed 
so that I can find as many or few events as I want

## Feature 4: Use the App When Offline
### User story 4.1: Show cached data when there’s no internet connection.

As a user
I should be able to see cached data when there's no internet 
so that I have information

### User story 4.2: Show error when user changes search settings (city, number of events).

As a user 
I should see an error when I change search settings
So I can make a new search

## Feature 5: Add an App Shortcut to the Home Screen
### User story 5.1: User can install the meet app as a shortcut on their device home screen.

As a user
I should be able to install the meet app as a shortcut on my device home screen
so I can have easy access

## Feature 6: Display Charts Visualizing Event Details
### User story 6.1: Show a chart with the number of upcoming events in each city

As a user 
I should be able to view a chart with the number of upcoming events in each city
so I can what cities need more events


#### I am using serverless functions in this project for authanitcation. I will also be using it for functionality.

## Development
### Installation
Run `npm install` from the project directory.

### To run it
run `npm run start` from the project directory
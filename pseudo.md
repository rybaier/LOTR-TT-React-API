# MY PSEUDOCODE PLAN AND MVP LIST
##### Basic Layout
- begin after approval do not move to coding until the following are checked off
- timeline built
- draft completed
- MVP steps laid out 

## TIMELINE Based on End of Day goals
-  Jan 19th 
    - Project Proposal, Readme framework wireframes
-  Jan 20th 
    - Project Timeline, PsedoCode, and MVP Steps laid out
-  Jan 21st 
    - Build App Framework 
    - (components, routes, reactstrap, basic CSS)
    - perform all npm necessary installs
    - connect framework and test displays with basic tags
- Jan 22nd 
    - Verify API data calls in each component produces desired data
    - fix any bugs that this creates with basic framework
- Jan 23rd 
    - Utilze and display API data
- Jan 24th 
    - Achieve MVP status and finish complete style
- Jan 25th 
    - Confirm MVP status, fix any bugs,        
    - Stretch Goal times
    - Presentation prep
- Jan 26th - Presentation day!

Timeline was an accurate representation of how goals were met. 

## HOW I WILL BUILD MY APP checklist
#### Framework 
- Framework list
    - NPM install react router, reactstrap, bootstrap (CHECK)
        - import bootstrap, react router, and reactstrap (CHECK)
    - Create component files organize them by directory called components (CHECK)
       - Page Components (MVP)  (CHECK)
            - Header  (CHECK)
            - Navigation Panel (CHECK)
            - InfoDisplay card (CHECK)
            - RandomFactSearch (button) (function)
            - Search Bar (stretch) (function)
            - Image Card (stretch) (CHECK)
        - Component Files
            - Home (MVP) (CHECK)
            - Characters (MVP) (CHECK)
           - Movies (stretch) (CHECK)
            - Quotes (MVP) (CHECK)
            - Books (stretch) (CHECK)
    - Build Each Header, Navigation Panel and Info Display Page Components basic layout  (CHECK)
        - Header (CHECK)
        - Navigation Panel (CHECK)
        - InfoDisplay  (CHECK)
    - Build Each Component File basic layout (CHECK)
        - add page components  (CHECK)
        - add basic tags for connectivity test (CHECK)
    - Add all Route Paths  (CHECK)
    - Add basic css borders, margins not already done with reactstrap and bootstrap for easy visual test (CHECK)
    - Test page connectivity with links and <h> tags to show connect (CHECK)

- Route Paths and links
    - Route Paths for Each component file held in App.js file  (CHECK)
    - Navigation Panel has links to each component file (CHECK)
    
- API framework and useEffect Hook, and Data functions 
    - add API calls with corresponding endpoints to each component file (CHECK)
    - verify API calls are logged  (CHECK)
    - organize data retrieved from API for each component file into basic layout for display (CHECK)
    
- CSS 
    - basic component style  (CHECK)
    - Visual style mobile friendly first (CHECK)
        - scale up style with media query 

#### FUNCTIONS 
- Function List
    - Random Data display
        - Random Search button
            - (update) as there are really only three usable endpoints for random data each has been given a seperate component to display that specific data 
                - user will be able to distinguish type of data by navigating to type of data through navigation 
            - useEffect API call and Authorization header with random endpoint assigned
                - create endpoint state variable 
                - sets API data to state variable
                - Math.random for index number of endpoint array assigned to variable
            - returns loading statement while gathering data
            - returns random LOTR info to useState variable
                - state variable data then used in corresponding component
                    - state variable mapped through for array with Math.random
                        - map through chosen array object 
                            - map through chosen object to gain final data for display
                                - returns data 
    - Function for parsing through API data
        - map function to create usable variables to display data
        - function needs to be in each component page
    - Search Bar Function (stretch)
        - function will take input value (text) and compare it to endpoint array variable 
            - using conditional endpoint array index will be applied to API fetch call
        - function will return gathered data  
            - function will map through API data object for desired information
                - use conditional to get correct data from object 
                - return data that is considered true and matches search.    
    - Quiz Function
        - Function will include taking character id from quote using api /character{id} endpoint to get the correct character name. 
        - additional api call with /character endpoint. set data to state variables. 
        - use 3 randomIndex generators to gather 3 random character names to use for multiple choice question. 
        - create buttons for all 4 character names (3 wrong 1 right)
        - create seperate correct answer and wrong answer messages with conditional statements and attach them to buttons with the characters name on them 
 

### MVP steps
- MVP checklist
    - npm install (CHECK)
    - build component framework designated as MVP (CHECK)
    - build basic css for components for correct display of data (CHECK)
    - add in Route Paths for all pages (CHECK)
    - add API Call with Authorization header (CHECK)
    - Get API to display data (CHECK)
    - build randomize info function(CHECK)
### stretch goals 
- add Who said it quiz version to quotes
    - Match random quote data with character id for character name for guessing 
    - add 8 random charcater names 

### Build NOTES 
- api token was verified using hoppscotch.io (quite a handy tool I have discovered as it also displays the data that is fetched!)
- .env succesfully hidden (note it needs to specifically be in the react app directory not the repo directory  )
- after building framework and attaching links decided to make seperate info display sections inside each component page
- and attaching API data, it became clear that the most seemless way to do this was to remove the infodisplay component entirely and process the data on the component page directly to avoid data diplay cross contamination
- changed random search function to random display data function on page render 
- random search button will be updated to force a rerender of data if selected 
- have to decide what type of data to display on home page leaning towards quotes, but maybe books?? or characters?
- gathering api data was relatively simple, however getting it to render was a bit more complicated. After several hours I came upon the solution while explaining the issue to someone else. it was a simple conditional not statement that created a data load screen (face palm)
- changed my pseudo to a md file from a js file based on sound advice was still doing pseudo out of habit because i liked the green color of the text while thinking however now that it's in a markdown it looks a lot nicer. so I must continue with this method moving forward. 
- Perhaps a button that displays all the movie data instead of just random in the future  
- random search component removed, single button with in it moved to individual pages instead 
- copied component pages with building comments in them, then refractored all components except for quotes. which is where my main stretch goal is 

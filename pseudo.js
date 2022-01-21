// MY PSEUDOCODE PLAN AND MVP LIST
//begin after approval do not move to coding until the following are checked off
//timeline built
//draft completed
// MVP steps laid out 

// TIMELINE Based on End of Day goals
//CHECK // Jan 19th - Project Proposal, Readme framework wireframes
// Jan 20th - Project Timeline, PsedoCode, and MVP Steps laid out
// Jan 21st - Build App Framework 
//              - (components, routes, reactstrap, basic CSS)
//          - perform all npm necessary installs
//          - connect framework and test displays with basic tags
// Jan 22nd - Verify API data calls in each component produces desired data
//          - fix any bugs that this creates with basic framework
// Jan 23rd - Utilze and display API data
// Jan 24th - Achieve MVP status and finish complete style
// Jan 25th - Confirm MVP status, fix any bugs, 
//          - Stretch Goal times
//          - Presentation prep
// Jan 26th - Presentation day!

//HOW I WILL BUILD MY APP checklist
// Framework 
//CHECK    // NPM install react router, reactstrap, bootstrap
//CHECK        // import bootstrap, react router, and reactstrap
//CHECK    // Create component files organize them by directory called components 
//CHECK       // Page Components (MVP)
//CHECK            // Header
//CHECK            // Navigation Panel
//CHECK            // InfoDisplay card
//CHECK            // RandomFactSearch (button) (function)
//CHECK            // Search Bar (stretch) (function)
//CHECK            // Image Card (stretch)
//CHECK        // Component Files
//CHECK            // Home (MVP)
//CHECK            // Characters (MVP)
//CHECK           // Movies (stretch)
//CHECK            // Quotes (MVP)
//CHECK            // Books (stretch)
    // Build Each Header, Navigation Panel and Info Display Page Components basic layout 
//CHECK        //Header
        //Navigation Panel
        // InfoDisplay
    // Build Each Component File basic layout
        //add page components
        // add basic tags for connectivity test
    // Add all Route Paths
    // Add basic css borders, margins not already done with reactstrap and bootstrap for easy visual test
    // Test page connectivity with links and <h> tags to show connect

//Route Paths and links
    // Route Paths for Each component file held in App.js file
    // Navigation Panel has links to each component file
    
// API framework and useEffect Hook, and Data functions 
    // add API calls with corresponding endpoints to each component file
    // verify API calls are logged 
    // organize data retrieved from API for each component file into basic layout for display
    
// CSS 
    // basic component style
    // Visual style mobile friendly first 
        // scale up style with media query

// FUNCTIONS 
    // Random Search function
        // useEffect API call and Authorization header with random endpoint assigned
             // create endpoint array variable 
             // Math.random for index number of endpoint array assigned to variable
             // endppoint variable interpolated into URL
             // sets API data to state variable
        // returns loading statement while gathering data
        // returns random LOTR info to useState variable
            //state variable data then used in corresponding component
                // state variable mapped through for array with Math.random
                    // map through chosen array object 
                        // map through chosen object to gain final data for display
                            // returns data 
    // Function for parsing through API data
        // map function to create usable variables to display data
        // function needs to be in each component page
    // Search Bar Function
        // function will take input value (text) and compare it to endpoint array variable 
            // using conditional endpoint array index will be applied to API fetch call
        // function will return gathered data  
            // function will map through API data object for desired information
                // use conditional to get correct data from object 
                // return data that is considered true and matches search.     

// MVP steps
//npm inatall 
//build componen framework designated as MVP
// build basic css for components for correct display of data 
// add in Route Paths for all pages 
// add API Call with Authorization header 
// build random search function

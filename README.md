# DAZN - Technical Test, Software Engineer (QA)

## Preconditions

```
Node 12 or later version is required
```

## Usage

_In root dir_

_Install_

```sh
npm install             # Install dependencies
```

_Run_
```sh            
npm run cy:debug        # Open cy test runner
npm run cy              # Run frontend and e2e tests headlessly 
npm run jest            # Run back-end tests
npm run perf:mainpage   # Run performance ramp-up on mainpage
npm run perf:api        # Run performance ramp-up on api
```

## Task

### Front-End

1. Using a BDD approach, build a small automated test framework, and then choose and write 5 user acceptance tests focused on the functionality of the application.

    _Chosen framework is [cypress.io](https://www.cypress.io/), run `npm run cy` or `npm run cy:debug` to open test runner (bear in mind it take a while for cypress to initialize for first time run)._ 
    
    _Keeping in mind the task is limited to only 5 tests, I've selected what I considered to be high priority scenarios, 2 more e2e test cases need to be added in order to cover a full acceptance test harness: one for checking non mandatory fields are displayed and one for checking that interface updates data when a new post code is submited_

1. Suppose you want to run some of these tests in a development pipeline that's independent from the backend development pipeline. Explain how you would approach this:

    - What techniques, frameworks or tools you might think of using;

    - How you would go about integrating this framework with a CI pipeline;

    _Cypress is a framework for front-end and end to end tests, it supports asserions, mocks and stubs. Based on that I've divided the tests in 2 suites, front-end and e2e, in theory front-end suite (`data.js`) is not too heavy-weight and should be able to run independent from the back-end if error handling is done on front-end level and for the case it needs a mock I've left a trace on where it needs to be added (`example-mock.json` in fixtures floder and `cypress.env.json`) but without touching the actual codebase it would be hard to complete this task._
    
    _Cypress offers a rich support for running in Continous Integration (for more [details](https://docs.cypress.io/guides/guides/continuous-integration.html#Boot-your-server)) and on some CI tools (eg. Jenkins - Windows node) it can just run headlessly without additional configs and dependecies, on request I can provide a dockerized Jenkins with pipelines and dependencies pre-configured. The easy solution for integrating automated browser testing frameworks in CI is choosing the right framework, other candidates for this task would have been Gauge + Taiko or Puppeteer._
  

1. Extras

    _Observations: Specified error text from requirements document does not match actual error text from the app._

    _Run `npm run perf:mainpage` for a ramp-up performance test on main paige._

### Back-End

1. Build a small automated test framework and write 4 automated tests for this endpoint based on the functional requirements given by the product owner, including a test for the error handling if the postcode is invalid.

    _Chosen framework is [jest.io](https://jestjs.io/), run `npm run jest`._ 

    _Keeping in mind the task is limited to only 4 tests, I selected what I considered to be an acceptance test harness that basically mirrors the front-end tests from an API perspetive, more tests could be added if a more detailed documentation is provided. Other candidate for this task would have been Mocha & Chai._

1. Looking at the architectural diagram, explain how you would approach testing this weather-app-api on an integration level.

    _Previously presented tests using jest are a good start, what I will also include is testing weather-app-api in isolation from geolocation-api and forecast-api and also handeling what happens if one of them breaks (and one of them breaks for a 1000 calls/minutes performance test)._

1. What other things might you be concerned with testing for this API? Are there any bugs/issues you noticed?

    Issues:

    - _Security - weather-app-api is public facing and it can be queried without any tokens or form of authentification._ 

    - _Error handling - No matter what values are posted in the payload and including null and excepting valid post code or non-valid post-code, error will always be “Invalid Address“._

    - _Performance - Weather-app-api breaks after a 1000 calls/minute performance test (good thing is that "Please try again later" error is displayed after it breaks)._

    Observations:

    - _Error code is 434 If weather-app-api call fails and not 433 as specified in requirements document._

    - _Back-end error text does not match front-end error text._

1. Extras

    _Run `npm run perf:api` for a ramp-up performance test on weather-app-api (DO NOT CHANGE FIGURES)._

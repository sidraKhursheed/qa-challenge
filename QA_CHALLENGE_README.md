<h1> Automation testing tool selection and Implementation with CI</h1>

The repo contains the tool i.e. **Cypress** that I have choosen for the QA Automation Technical Challenge.

## Introduction to Cypress
* Cypress is the next generation automation testing tool
* Open source
* Built on node js
* javaScript is used to write the test cases

## Advantages of Cypress
* Easy to install and use
* Fast growing community
* Deliver fast, reliable and consistent execution
* Provide debuggability
* Asynchronization
* Custom commands can be added to remove redundancy

## Type of Test that Cypress support
* End to end test
* Integration test
* Unit test
* Anything that runs inside the browser

## Browser Support in Cypress
  By default it uses the browser called electron which is a chromium version for electron. You can pass the browser of your own choice by using the following command i.e. **<em>npx cypress run --browser=chrome --headless</em>**
  List of browsers that cypress support
    * Chrome 64 and above.
    * Edge 79 and above.
    * Firefox 86 and above.

## Install of Cypress
  **Prerequisite**
  * node js version should be install
  * node js should be passed in the environment variable
  * Visual studio code should be install

  Follow the following steps for the installation
  1. Clone the repo where you want to create the script i.e. **<em>https://github.com/sidraKhursheed/qa-challenge</em>**
  2. Open the folder in the VS code
  3. Run the following command i.e. **<em>npm install cypress</em>**
  4. Once the installation is finished, run the following command to run the cypress locally **<em>npx cypress open</em>**
  5. Remove all the existing test case example form the following folder i.e. **<em>cypress-->integration</em>**
  6. Add the new file **test.spec.js** under the following folder i.e. **<em>cypress-->integration</em>**

## Writing Test cases in the test.spec.js
 1. Written the testcase for a dummy site i.e. https://opensource-demo.orangehrmlive.com/
 2. Added the **Custom commands** in **command.js**. In cypress custom commands are used to reduce the redundancy in the code
 3. Add the repeated data in **example.json**, so you don't need to change the script. By using fixture we can call that data in the test script
 4. Added the hooks for example **beforeEach** and **afterEach**. Hooks are added to specify those actions that needs to be perform before and after of each test case execution

## Adding the configuration file
* Add the configuration in the **<em>cypress.josn</em>** to handle the porject configuration

## Execution of script using the Command Line
* Run the following command i.e. **<em>npx cypress run</em>** 

## Integrating Mocha report with Cypress
1. Execute the following command on terminal i.e. <em>**npm install mochawesome**</em>
2. Add the mocha reference to **Cypress.json**

## Integrating the CI tool
Implemented the **GitHub** CI tool with **Cypress**. For reference please check the following link
https://docs.cypress.io/guides/dashboard/github-integration#Install-via-project-settings

1. Once the integration process is gitHub will generate the <em>projectID</em> and will automatically add the reference in <em>cypress.json</em>
2. Record key will also be generated. By using that record key you can record you test cases.
    * Execute the following command to record the run <em>**npx cypress run --record --key 974cfab9-e3c7-497b-a055-c931a7275c46**</em>
4. Project ID and record key will be available in project setting.![Tux, ProjectSetting](/PrjectID-RecordID.png) 
4. At the end of execution you can see the test run at the dashboard 
5. Latest run execution will be displayed as follows ![Tux, the latest run](/Latest-run.png) 
6. Number of run status will be be displayed as follows ![Tux, the run status](/Run-Status.png) 

<h2>Note</h2>
Feel free to coordinate if found any issue or ambiquity
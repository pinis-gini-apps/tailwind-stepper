# Welcome-Web
## First Steps:
clone this repo and run `yarn install`.
### The Purpose of this project is to help you ease in to your work here in Gini.
In this project, you are requested to create a multi-step sign-up web application based on React, TypeScript, TailWind (A utility-first CSS framework ) and a state-management tool of your choice. 
You will work on implementing some generic components that will re-render with different shapes (content and styling) according to a JSON / state-based configuration. <br/>
Feel free to take a look at `structure_demo.js` for a non-binding example. <br/>
## The structure would be like so:
### Stepper
A state-based stepper that will indicate the user's current step.
### Heading
### SubHeading
### TextBox / Select / Checkbox / RadioButtons / Date / File
Use each of them on different (not necessarily all) steps/screens.
### Back & Next Buttons
Will trigger a Back/Next 'event'. The last step will include only one button - Submit - which will trigger a POST request with the user's entered data as payload to https://webhook.site/ <br/> <br/>
Later on, please create a validation service. Could (and probably should) be based on an open-source validation library.
Try to make the validation as scalable as possible so that re-using it on a different project would work like a breeze. For example, each instance's validation should be described as an inner property (See example in `structure_demo.js`). <br/>
You can use the following example as a rough template, but feel free to get creative: https://cdn.wedevs.com/uploads/2018/01/wpuf-blog-create-multistep-form-sample-1.png <br/>
###### P.S If you're new to TypeScript, seeing that it's a superset of JavaScript, you could just fill your ts/x files with JS code and edit it later.

## Have Fun!

# test2
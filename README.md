# Logr
Logr is a Full-Stack CRUD app that gives users the ability to track a variety of symptoms by filling out a Daily Log. The Daily Log is designed to be thorough while remaining easy to complete. Logr's UI/UX design prioritizes accessibility and responsiveness with large text and icons for readability, user-friendly form inputs, and a consistent, well-thought out structure. 

## Motivation
I came up with the idea for Logr after I had created a Daily Symptom Log to better track and manage my Fibromyalgia. An issue many people with chronic illnesses have (including myself) is remembering all of the triggers, symptoms, and general chaos each day includes. This makes it harder to manage your symptoms and almost impossible to fully explain them to doctors. Logr is a solution to that!

## Table of Contents
1. [Technologies Used](#technologies-used)
2. [Planning](#planning)
3. [Getting Started](#getting-started)
4. [Current App - beta](#current-app---beta)
5. [Credits](#credits)
6. [Status](#status)
7. [Future Enhancements](#future-enhancements)

## Technologies Used
* HTML5
* CSS3
* JavaScript
* Mongoose
* MongoDB
* Node
* Express
* Bootstrap
* jQuery

## Planning
### Research
First, I posted in chronic illness forums and talked with my friends that also have chronic illnesses. I got feedback on features users would want and any other expectations. Then, I examined similar apps to identify any commonalities. My research stage also included learning more about creating accessible applications!

### Wireframe
<img width="961" alt="wireframe" src="./public/images/health-tracker-app-wireframe.png">
Designed in collaboration with Blu Funk-Wilder

### User Stories
Before starting to code, I created user stories in a [Trello Board](https://trello.com/b/0pU2UzMl/logr-user-stories). These acted as a to-do list as I developed Logr.

## Getting Started
[Click Here to see the deployed app!](https://logr-symptom-tracker.herokuapp.com/) To add a new log entry click "New Log" and fill out form details. Please note - the User and Share buttons are empty links because those features are in development.

## Current App - beta
<img width="961" alt="Dashboard" src="./public/images/v1-final.png">
<img width="961" alt="New Log" src="./public/images/v1-final1.png">
<img width="961" alt="Log Page" src="./public/images/v1-final2.png">
<img width="961" alt="Edit Log" src="./public/images/v1-final3.png">

## Credits
UI/UX Co-Designer - Blu Funk-Wilder - Figma

## Status
1. Debugging: On older iOS(pre iPhone 12) - The add new log button is not submitting the new log form 

## Future Enhancements
* Add User Auth so each user can add their own private logs
* Users can share entries
* If user is not logged in, index shows landing page describing app
* Add logo and other custom design elements
* Logged in users can see statistics to identify patterns over time
* Integrate weather API to display users weather automatically for each entry

# 07 Project 1: Mix & Match: Cocktail & Music Video Generator

## Description

Mix & Match uses the Cocktail DB and YouTube APIs with Tailwind CSS, Tailwind Elements and Moment.js to create a seamless cocktail and music video pairing for user. When the "Match My Mix" button is clicked, user is presented with an age verification modal. If they are of legal age, they are presented with the next screen, else a denial message is displayed. For users 21+, a drink input box appears in which they can pick their alcohol of choice. Once the drink input 'Match My Mix" button is clicked, user is displayed a results page for their pairing. The results display randomly generated cocktail image and ingredients, paired with a music video in the genre displayed at the top. User's alcohol choice is saved to local storage for future use. User has option to restart by clicking "Home" or seeing a different pair in their alcohol preference by clicking "Match Me a New Mix". 

## User Story

```md
AS A user
I WANT a recommendation for a cocktail and curated music video
SO THAT I can find new, exciting mixed drinks and music without requiring research
```

## Acceptance Criteria 

```md
GIVEN I want a recommendation of cocktail and curated music video  
WHEN I click the “Mix My Match” button
THEN I am presented with a modal that asks me to enter my birthday
WHEN I birthday that is not of legal age (<21)
THEN I am displayed a message
WHEN I enter birthday of legal age (21+)
THEN I am presented with an alcohol input page
WHEN I select which alcohol type I want from the given dropdown menu 
THEN I am presented with a results page with randomly generated cocktail and curated music video
WHEN I click the “Match Me A New Mix” button
THEN I am presented with a new result for the same input
WHEN I click the “Home” button 
THEN I return to the home page and can start over
```

## Technologies Employed
- HTML
- CSS
- JavaScript
- Mobile First UI
- DOM Manipulation
- Local Storage
- Moment.js
- Tailwind CSS
- Tailwind Elements
- The Cocktail DB API
- The YouTube Data API

## Future Development

- Enhanced API key security - Abstract details from client
- Improved music video pairing - Better content selection
- Adding search history and clear history in window
- Implementing NPM connection for production

## Mock-Up
[Mix & Match Live Link](https://isayani.github.io/cocktail-music-generator/)

The following images shows the web application's appearance and functionality:

![Mix & Match Wireframe](./assets/images/Mix%20%26%20Match%20Wireframe.png)

![App gif]()

- - -
© 2022 Mix & Match (Insha Sayani, Mac Greene, Bernie Petters, Ashlynn Landry), Confidential and Proprietary. All Rights Reserved.

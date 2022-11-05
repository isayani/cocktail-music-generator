# Mix & Match: Cocktail & Music Video Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Mix & Match uses the Cocktail DB and YouTube APIs with Tailwind CSS, Tailwind Elements and Moment.js to create a seamless cocktail and music video pairing for user. When the "Match My Mix" button is clicked, user is presented with an age verification modal. If they are of legal age, they are presented with the next screen, else a denial message is displayed. For users 21+, a drink input box appears in which they can pick their alcohol of choice. Once the drink input 'Match My Mix" button is clicked, user is displayed a results page for their pairing. The results display randomly generated cocktail image and ingredients, paired with a music video in the genre displayed at the top. User's alcohol choice is saved to local storage for future use. User has option to restart by clicking "Home" or seeing a different pair in their alcohol preference by clicking "Match Me a New Mix". 

## Table of Contents
1. [Description](#description)
2. [Table of Contents](#table-of-contents)
3. [Usage](#usage)
4. [Installation](#installation)
5. [License](#license)
6. [Technologies Employed](#technologies-employed)
7. [Future Development](#future-development)
8. [Contributing](#contributing)
9. [Questions](#questions)

## Usage

### User Story

```md
AS A user
I WANT a recommendation for a cocktail and curated music video
SO THAT I can find new, exciting mixed drinks and music without requiring research
```

### Acceptance Criteria 

```md
GIVEN I want a recommendation of cocktail and curated music video  
WHEN I click the “Mix My Match” button
THEN I am presented with a modal that asks me to enter my birthday
WHEN I enter a birthday that is not of legal age (<21)
THEN I am displayed a message
WHEN I enter a birthday of legal age (21+)
THEN I am presented with an alcohol input page
WHEN I select which alcohol type I want from the given dropdown menu 
THEN I am presented with a results page with randomly generated cocktail and curated music video
WHEN I click the “Match Me A New Mix” button
THEN I am presented with a new result for the same input
WHEN I click the “Home” button 
THEN I return to the home page and can start over
```
## Installation
[Mix & Match Live Link](https://isayani.github.io/cocktail-music-generator/)

The following images shows the web application's appearance and functionality:

![Mix & Match Wireframe](./assets/images/Mix%20%26%20Match%20Wireframe.png)

![App gif](./assets/images/Mix_and_Match_Demo.gif)

## License
This project is licensed under the MIT license.

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.<p />For more information visit [MIT Licensing](https://choosealicense.com/licenses/mit/).

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

## Contributing
We'd love for you to contribute! In order to do so, fork this repository. We currently require two (2) approvals by our QA team in order to merge to ```main```. <br/><br/> Take a look at our [Future Development](#future-development) section to see what we are looking to expand on (implemented features are denoted with a &check;).

## Questions
Find us on Github via the individual links below:
* [Insha Sayani](https://github.com/isayani)<br>
* [Mac Greene](https://github.com/macgreene14)<br>
* [Ashlynn Landry](https://github.com/ashclandry)<br>
* [Bernie Petters](https://github.com/bp4924)

Or visit our app's repository on GitHub:
[Mix & Match](https://github.com/isayani/cocktail-music-generator)

- - -
© 2022 Mix & Match (Insha Sayani, Mac Greene, Bernie Petters, Ashlynn Landry), Confidential and Proprietary. All Rights Reserved.

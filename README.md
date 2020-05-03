This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Trivia Game

Trivia Game contains quizzes containing ten questions. Questions are fetched from [Open Trivia Database Api](https://opentdb.com/) . While fetching the questions, we setting the API of the Open Trivia Database when the **Go to Game** button is pressed according to the **Category** and **Difficulty Level** data selected by the user on the **Welcome Page**. Thus, the first question of the quiz, which is formed by the category and difficulty level chosen by the user, is displayed.

In this game, **15 seconds** are defined for the user to answer the question. If the user answers the question **correctly** during this time, the **next question** of the quiz will appear on the screen. If the user **fails** to answer the question correctly, a **Game Over** page will open indicating that user answered the question incorrectly, this page contains a **Try Again** button that will allow the user to **play the game again**. If the user presses this button, the user will be **redirected to the Welcome page**. If the user **cannot answer the question within 15 seconds, the Finish Time page** will appear on the screen, and it also includes a Try Again button that will allow the user to play the game again.If the player **answers all questions correctly**, she will be directed to the **Finish Game page**.

During the game, the user's **score** is determined by the duration of the player's answer to the question. We determine the user's score by **adding 10 times the remaining time** of the player's response time to the user's current score.

I used many [Lottie Animations](https://lottiefiles.com/) while designing the game.

**--Note**

If I wanted to define a **50% Joker** on the game, I would define a trigger. I would write this trigger as a function to be performed when the 50% Joker button I defined was clicked. I would define IDs for options of questions and adjust their visibility. When the trigger worked, I would pull out the wrong options, and randomly turn off the visibility of 2 options and call the function that displays the question in line with these adjustments. Using Redux, I set the 50% Joker button to be used once.

Guide for the [implementation of Lotties](https://www.npmjs.com/package/react-lottie).

I used a theme from [Prime React](https://www.primefaces.org/primereact/showcase/#/setup) for the buttons and drop-down menus .
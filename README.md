# Star Wars Planets Directory

## Overview

Star Wars Planets Directory is a web application developed using Angular that showcases information about planets from the Star Wars universe. This project leverages the Star Wars API (SWAPI) to fetch and display data about each planet, including details such as name, climate, population, terrain, and notable residents.

## Features

1. **Planets Directory:**
    - Fetches and displays information about planets from the SWAPI (`https://swapi.dev/api/planets/?format=json`).
    - Each planet's data is presented in a distinct card, showcasing its name, climate, population, terrain, and more.

2. **Residents Display:**
    - Within each planet's card, lists notable residents fetched using their respective URLs found in the planet's data.
    - Displays relevant details about each resident, such as name, height, mass, and gender.

3. **Pagination Mechanism:**
    - Implements pagination functionality to navigate through the list of planets.
    - Leverages the "next" URL provided in the API's response for fetching additional pages.
    - Provides user-friendly and intuitive pagination controls.

4. **Styling and Responsiveness:**
    - Utilizes CSS to style the application with a clean and engaging layout.
    - Ensures responsiveness across various devices and screen sizes for a seamless user experience.
    - Demonstrates modern layout techniques such as Flexbox and Grid.

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd star-wars
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    ng serve
    ```

5. Open your browser and visit `http://localhost:4200` to view the application.

## Deployment

This project can be deployed to a free hosting service such as GitHub Pages, Vercel, or Netlify for live demo. Follow these steps to deploy:

1. Build the project:

    ```bash
    ng build --prod
    ```

2. Deploy the `dist` folder generated in the `star-wars` directory to your preferred hosting service.

3. Ensure that your hosting service supports Angular applications and configure any necessary settings.

4. Once deployed, provide the live demo link in your submission.

## Evaluation Criteria

- **Functionality:** Ensure that the application functions as described, fetching and displaying data accurately with working pagination.
- **Code Quality:** Write clean, well-organized, and efficiently written code following best practices in Angular development.
- **Design and User Experience:** Strive for a visually appealing and interactive user interface that enhances the user experience.
- **Responsiveness:** Ensure that the application offers a seamless experience across various devices and screen sizes.
- **Extra Mile:** Consider adding additional features or creative touches to enhance the application's usability, appearance, or functionality.

## Resources

- [Star Wars API (SWAPI)](https://swapi.dev/)
- [Planets API](https://swapi.dev/api/planets/?format=json)
- [Residents API](https://swapi.dev/api/people/)

## Contributors

- [Devopslayer](https://github.com/devopslayer)
- [Angular Documentation](https://angular.io/docs)
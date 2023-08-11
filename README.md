# Pet Adoption App

Welcome to the Pet Adoption App! This is a web application that allows users to search and adopt pets. The app provides a user-friendly interface to search for pets based on location, animal type, and breed. Users can also view detailed information about each pet and choose to adopt them.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Components and Hooks](#components-and-hooks)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/pet-adoption-app.git
   cd pet-adoption-app
   ```

Install dependencies:

    npm install

Start the development server

    npm run dev

Usage

    Open your web browser and navigate to http://localhost:3000.
    Use the search form to specify the location, animal type, and breed you're interested in.
    Click the "Submit" button to see a list of pets that match your criteria.
    Click on a pet to view more details and decide if you want to adopt them.

Components and Hooks

The Pet Adoption App is built using React and various hooks. Here's a brief overview of some key components and hooks used in the app:

    SearchParams: Displays a search form where users can specify location, animal type, and breed.
    Results: Displays a list of pets based on the search results.
    Pet: Represents a card displaying information about a pet, used within the Results component.
    Modal: Creates a modal dialog for interactions like adopting a pet.
    useBreedList: A custom hook that fetches a list of breeds based on the selected animal type.
    fetchBreedList: Fetch function used by the useBreedList hook to get breed data.
    fetchSearch: Fetch function used to search for pets based on the specified criteria.

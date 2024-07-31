# React Stepper Component

This project implements a customizable stepper component in React, designed for multi-step processes or forms. The stepper provides a visual guide through numbered steps, with an interactive interface for navigation.

## Features

- Vertical layout with numbered step indicators
- Visual differentiation between active, completed, and upcoming steps
- Step labels for clear process description
- Content area for each step's information
- Navigation controls (Back and Next buttons)
- Customizable step content

## Component Structure

The stepper consists of two main parts:
1. Step indicators (left side)
2. Content area (right side)

### Step Indicators
- Numbered circles representing each step
- Labels next to each circle describing the step
- Vertical lines connecting the circles
- Active and completed steps are highlighted in blue

### Content Area
- Displays the content for the current step
- Contains navigation buttons (Back and Next)

## Implementation Details

### React Component (Stepper.js)

The main component uses React hooks to manage the current step state. It renders the step indicators and the content area, handling step navigation through button clicks.

Key features:
- Uses `useState` to track the current step
- Maps through an array of steps to render indicators and labels
- Conditionally styles active and inactive steps
- Renders the content of the current step
- Implements navigation logic with `handleBack` and `handleNext` functions


## Usage

To use the Stepper component:

1. Import the Stepper component into your React application
2. Prepare an array of step objects, each containing a label and content
3. Pass the steps array as a prop to the Stepper component


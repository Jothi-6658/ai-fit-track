# Phase 3 – Project Design

## Project Title
AI Fit Track

## System Design
AI Fit Track is designed as a simple web-based fitness tracking application using HTML, CSS and JavaScript.

## System Architecture

The project follows a simple client-side architecture:

User
↓
Web Interface
↓
JavaScript Processing
↓
Fitness Calculations and Recommendations
↓
Dashboard Output

## Main Modules

### 1. Home Module
- Displays the project introduction.
- Provides navigation to login, registration and dashboard.

### 2. Registration Module
- Allows new users to register.
- Stores user details in browser local storage.

### 3. Login Module
- Verifies the registered user details.
- Provides access to the fitness dashboard.

### 4. BMI Module
- Accepts height and weight.
- Calculates BMI.
- Displays the BMI result and category.

### 5. Workout Module
- Tracks daily workout activities.
- Includes running, stretching and squats.

### 6. Exercise Module
- Tracks exercises such as push-ups, plank and lunges.

### 7. Activity Module
- Tracks daily steps and calories.

### 8. Water Tracking Module
- Records daily water intake.
- Displays water progress using a progress bar.

### 9. Recommendation Module
- Provides fitness and diet recommendations based on BMI.

### 10. Dashboard Module
- Displays important fitness information in one place.
- Shows BMI, steps, calories, water intake and workout status.

## Data Flow

1. User enters information through the web interface.
2. JavaScript processes the entered information.
3. Required calculations are performed.
4. Fitness results and recommendations are generated.
5. The dashboard displays the results to the user.

## User Interface Design

The application contains:
- Navigation menu
- Login and registration pages
- Fitness dashboard
- Input forms
- Buttons
- Result sections
- Progress indicators
- Recommendation sections

## Data Storage

Browser local storage is used to store basic user information and maintain login-related data.

## Design Goal

The main design goal is to provide a simple, organized and easy-to-use fitness tracking interface for users.

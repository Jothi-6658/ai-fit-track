# Phase 6 – Project Testing

## Project Title
AI Fit Track

## Testing Objective
The purpose of testing is to verify that the AI Fit Track application works correctly and that all major features provide the expected output.

## Testing Methods

### 1. Registration Testing
- Checked whether users can enter registration details.
- Verified that user information is stored correctly.
- Tested registration with empty fields.

### 2. Login Testing
- Tested login using valid credentials.
- Tested login using incorrect credentials.
- Verified that successful login opens the fitness dashboard.
- Tested logout functionality.

### 3. BMI Calculator Testing
- Entered different height and weight values.
- Verified that BMI is calculated correctly.
- Tested the calculator with empty input.
- Checked the displayed BMI recommendation.

### 4. Workout Testing
- Tested running, stretching and squats tracking.
- Verified that workout status is updated correctly.

### 5. Exercise Testing
- Tested push-ups, plank and lunges.
- Verified that exercise information is displayed correctly.

### 6. Steps and Calories Testing
- Entered daily steps.
- Entered calorie information.
- Verified that the dashboard displays the entered values.

### 7. Water Intake Testing
- Entered different water intake values.
- Tested the water recommendation.
- Verified that the water progress percentage changes correctly.
- Tested the progress bar.

### 8. Recommendation Testing
- Tested fitness recommendations using different BMI values.
- Tested diet recommendations.
- Verified that the displayed recommendation changes according to the BMI range.

## Test Cases

| Test Case | Input | Expected Result | Status |
|---|---|---|---|
| Registration | Valid user details | User registration successful | Pass |
| Login | Valid credentials | Dashboard opens | Pass |
| Login | Incorrect credentials | Error message displayed | Pass |
| BMI | Height and weight | BMI result displayed | Pass |
| Workout | Select workout | Workout status updated | Pass |
| Exercise | Select exercise | Exercise status updated | Pass |
| Steps | Enter step count | Steps displayed | Pass |
| Calories | Enter calorie value | Calories displayed | Pass |
| Water | Enter water intake | Water progress updated | Pass |
| Recommendation | BMI value | Recommendation displayed | Pass |
| Logout | Click logout | User logged out | Pass |

## Error Handling
- Empty input fields are checked where required.
- Invalid login details are handled.
- Invalid water input is handled.
- The application displays suitable messages for incorrect or missing inputs.

## Testing Result
The major features of AI Fit Track were tested and verified during development. The application is able to perform the planned fitness tracking and recommendation functions.

## Conclusion
Testing helped identify and correct errors in the application and ensured that the main features work as expected.

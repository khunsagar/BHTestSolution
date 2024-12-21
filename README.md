# BHTestSolution
Solution for test using cyprees
Here's a `README.md` file that covers the steps you mentioned, including how to set up and run Cypress locally, troubleshooting the Mocha Awesome report, and using GitHub Actions for continuous testing.

```markdown
# Cypress Automation Tests

This project uses **Cypress** for end-to-end testing. Tests are organized based on pages and locators are separated for easy maintenance. Common functions are included in a separate command file for reusability.

## Table of Contents
1. [Installation](#installation)
2. [Running Tests Locally](#running-tests-locally)
3. [Mocha Awesome Report](#mocha-awesome-report)
4. [GitHub Actions](#github-actions)
5. [Workaround if Tests are Not Working](#workaround-if-tests-are-not-working)

---

## Installation

### Prerequisites
- **Node.js**: You need to have Node.js installed on your machine. You can download and install it from [here](https://nodejs.org/).

### Step 1: Install Node.js

Run the following command to install Node.js:

```bash
# On macOS (Homebrew)
brew install node

# On Ubuntu/Debian
sudo apt-get install -y nodejs

# On Windows, use the installer from the Node.js website
```

After installation, verify that Node.js is installed by running:

```bash
node -v
npm -v
```

### Step 2: Install Cypress

Once Node.js is installed, you can install Cypress. In your project folder, run:

```bash
npm install cypress --save-dev
```

### Step 3: Verify Cypress Installation

After Cypress is installed, you can open the Cypress Test Runner. Run the following command:

```bash
npx cypress open
```

This will launch the Cypress IDE, where you can interactively run tests. You can also run tests in headless mode (without the UI) using the following command:

```bash
npx cypress run
```

---

## Running Tests Locally

1. **To run tests in the Cypress UI**:
   - Execute the following command:
     ```bash
     npx cypress open
     ```
   - This will open the Cypress Test Runner where you can select the tests you want to run.

2. **To run tests in headless mode**:
   - Execute the following command:
     ```bash
     npx cypress run
     ```
   - This will run your tests in headless mode, without opening the Cypress UI.

---

## Mocha Awesome Report

I have attempted to configure the Mocha Awesome report for test result reporting, but it is currently not working properly. Further debugging is required to get it working.

### Issues with Mocha Awesome
- The reports are not being generated as expected.
- The issue needs further debugging, which I am still working on. 

If you want to try generating the reports, you can use the following steps:
1. Install the necessary packages for Mocha Awesome:
   ```bash
   npm install mochawesome mochawesome-merge mochawesome-report-generator --save-dev
   ```

2. Configure Cypress to generate reports (if it's working):
   - Add the necessary configurations to `cypress.json`.

---

## GitHub Actions

I have set up GitHub Actions to run tests automatically on every push and pull request. However, this process may take some time to set up fully, and it is still under debugging.

### Steps for GitHub Actions Configuration
1. A GitHub Actions workflow file has been created in `.github/workflows/`.
2. The workflow runs Cypress tests whenever a commit is pushed or a pull request is created to the main branch.
3. The workflow includes uploading the test reports as artifacts.

### Troubleshooting GitHub Actions
- If the tests are not running properly, you may need to check the GitHub Actions logs for any errors.
- Ensure that the necessary dependencies (like Node.js, Cypress) are installed correctly in the CI environment.

---

## Workaround if Tests are Not Working

If the above configurations are not working for you, you can try this workaround:

1. **Install Node.js and Cypress** on your local machine (as outlined above).
2. **Copy the following folders** from the repository:
   - `e2e`
   - `fixtures`
   - `cypress.config.js`
   - `support`

3. Place these folders and files into your local Cypress project folder.
4. After adding these files, you should be able to run the tests as described in the **Running Tests Locally** section.

---

## Troubleshooting

If you encounter issues, please check the following:

- **Ensure Cypress is installed correctly** by running `npx cypress open` or `npx cypress run`.
- **Verify your project structure**: Make sure the necessary folders (`e2e`, `fixtures`, etc.) and configuration files are in place.
- **Check your Node.js and npm versions** to ensure compatibility with Cypress.
- **Check Cypress logs** for any errors during test execution and review any issues in the GitHub Actions logs if applicable.

If you still encounter issues, please feel free to reach out with more details about the error you're facing, and I'll be happy to assist!

---

## Results for local run
![Screenshot 2024-12-21 at 20 03 35](https://github.com/user-attachments/assets/118f2f5e-1bcf-4a77-b1cb-3c8c06f4e790)


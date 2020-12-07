# Repeefy V1.0

Official Version 1.0 web application for Repeefy beneficial app

---

Development Mode

---

A guide on how to use the repo!

Please before you push your codes to the repository make sure you pull from the develop branch, so the changes that have been made can be reflected on your local machine, for us to avoid merge conflicts use the git command line

    git pull origin develop

## Developers guide

This process here should be able to guide you on how to contribute effectively to this project, follow the steps below. You should not be new to the git workflow process however if you still are, the guide should still be able to help you through the process.

## develop is the default branch

- Clone the repository.
  Please do not fork the repo

        ```
        git clone https://github.com/Repeefy/Repeefy-FE.git
        ```

- switch to your branch

       ```
       git checkout (name-of-branch)
       ```

- Or create a new one

       ```
       git checkout -b (name-of-branch)
       ```

- run npm install tp install all dependencies, libraries and tools the project needs installed, from the package.json file.

        ```
        npm install
        ```

  After changes have been made run:

  `git pull origin develop`

  Consistently pull from the develop branch to avoid not getting your pull request merged due to conflicts.
  This way you can resolve conflicts from your local computer even before pushing always check what branch you are on when making changes

  - Make your changes, add them and make your commits

        ```
        git add .
        git commit -m "your message"
        ```

    Write good commit messages, this is very important, so that other teammates reviewing would know what your code is doing.

  - Push your codes to your branch, make sure you are pushing to your branch please don't push to develop or master

    `git push origin (name-of-branch)`

    Make your Pull request from that branch you created and wait for it to be merged.

Write good commit messages, this is very important, so people reviewing can know what your fix, feature e.t.c. is doing
Your PR should carry good story.
if you are going to make changes to an existing code, state why you are doing so in the commit messages

it is not just about the code, user workflow matters too!!

### Code with Love

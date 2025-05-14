---
title: VSCode and Git
sequence: 2
description: Shortcuts and useful features that you should know about the tools you use everyday
languages:
  - vscode
  - git
---


VSCode is extremely powerful software and it's frankly amazing that it's free. But the courses we take never really go over how to take advantage of what VSCode can do. So I wanted to go over some of the features I use that help me in my work.

## 1. Git Integration
VSCode's integration with Git is by far the most common feature I use. Knowing how to use `git` in the command line is important and all, but it's so much faster to use a UI sometimes, particularly for complicated actions.

`commit`, `push`, `pull` and `branch` are the most common things I do, all of which are available in the Git sidebar menu. 

## Git & GitHub
We also made extensive use of GitHub in the project, and it's important to remember the distinction between the two.
1) Git is a **Source Control Manager**, meaning it helps you manage iterations of software and see changes made over time. Git on its own is **decentralized**, meaning all git clients, such as your computers, (typically) have the full history of the git repo downloaded.

2) GitHub is **Software as a Service (SaaS)**. It integrates with Git to manage a **centralized** location to store, track, and manage changes to your repository. Git clients can connect with GitHub to `pull` and `push` commits to one central place.

A tool similar GitHub is effectively essential in corporate projects. As a basic example, if you were managing a multi-million dollar project, you probably would want to limit who was allowed to issue new builds of your software, and GitHub allows you to do that, whereas barebones Git does not. 

Plus, GitHub offers additional features to Git, such as Issues, Pull Requests (Branch Merge Requests) and **Continuous Integration/Continuous Development (CI/CD)**. I am using a CI pipeline in our project to automatically build new versions of this website whenever changes are made to the `web` folder. You can see what that looks like [here](https://github.com/SFU-CMPT353-S25-DBS/Project/blob/main/.github/workflows/deployWeb.yaml)

Todo✨
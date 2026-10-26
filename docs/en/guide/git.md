---
description: "How to use Git right from your phone in PawnStudio, including commit, push, and pull."
---

# Using Git on Your Phone

PawnStudio has built-in Git, so you don't need Termux.

## What you can do

- View file status, branches, and commit history
- Set up your account and initialize a repo
- Commit selected files
- Set a remote, then push and pull with a GitHub token

## Setup

GitHub doesn't accept regular passwords for pushing over HTTPS. Create a **Personal Access Token** on GitHub (Settings → Developer settings → Personal access tokens), then use that token in PawnStudio.

## Daily workflow

1. **Pull** first so your project is in sync.
2. Edit your code as usual.
3. Check the status, then **tick the files** you want to commit. Only ticked files go into the commit.
4. Commit with a clear message.
5. **Push** to GitHub.

## Tips

- Push and Pull have a 60-second timeout. If the connection stalls, the process stops by itself and the app doesn't hang. Try again with a better signal.
- Never commit tokens or passwords to a repo.

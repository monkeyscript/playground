# Checks the git version
git --version

# Set system level configuration
git config --system

# Set user level configuration
git config --global

# Set project level configuration
git config

# List saved configuration
git config --list

# View entire git log
git log

# View git log : limit by count
git log -n <count>

# View git log : limit by time
git log --since=<time>

# View git log : limit by time
git log --until=<time>

# View git log : limit by author
git log --author=<name>

# View git log : limit by commit message
git log --grep=<regex>

# Adds changes to stage/index
git add .

# Commits your changes and sets it to new commit object for your remote
git commit -m "Your message"

# Checks the status of files you have changed in your working directory
git status

# Shows diff btw working copy and repo
git diff

# Shows diff btw staging and repo
git diff --staged

# Shows diff highlight changes only
git diff --color-words

# Lists out all branches
git branch

# Merges two branches you were working on
git merge <branch>

# Push or pull changes
git push/pull <remote> <branch>

# Switch to another branch
git checkout <branch>

# Shows changes in a commit
git show <id>

# Compares two commits
git diff <id>...<id>

# Unstage changes
git reset HEAD <file>

# Discard all changes
git checkout --

# Amend to most recent commit
git commit --amend -m "message"

# Reverts a commit
git revert <id>

# Removes untracked files
git clean -f
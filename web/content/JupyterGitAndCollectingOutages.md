---
title: Jupyter, Git, and Collecting Outages
description: Some additional information on why I pushed for us to use Jupyter, the Git commands I used, and how I collected outages from the GitHub repository.
---

I wanted to make sure that I left you with an good example of a project that you can look back on. So here's a brief(ish) overview of the what I did behind the scenes which I didn't have time to explain fully during the project.

<br/>

# 1. VSCode & Jupyter
Did you know that you can run Jupyter notebooks directly in VSCode? Now you do! I had a few reasons why I pushed for us to do this. Apart from the fact that we all already had VSCode installed, Jupyter makes working with file trees sooo much simpler. Let me give you an example:

```python [script.py]
import pandas as pd
pd.read_csv("./dataset.csv")
```

When you run this script, where will Python look for `dataset.csv`{lang="csv"}? Well, rather inconveniently, it will look relative to the **current working directory (CWD)**. If your CWD is the exactly the same as your script location, then that's no problem. But if you have to run, say `python ./subdir/script.py`{lang="shell"}, now you need to remember to do one of two things:
1) Change your CWD to the script location before running it (with `cd ./subdir`{lang="shell"}), or
2) Separate where you put `dataset.csv`{lang="csv"} and your script like so:
```
. (cwd/)
│   dataset.csv
│
└── subdir/
    │   script.py
```

Neither of the options are good, one is prone to forgetting, and the other is not clean. So how do we fix this?

## Introducing Jupyter (for VSCode)
Apart from the niceties that Jupyter notebooks provide, such as inline outputs and text cells, one of the most useful features is how it handles working directories. You see, when you run a Jupyter notebook (in VSCode) the CWD is automatically set to be the location of the notebook! That means that **paths such as `./dataset.csv`{lang="csv"} are always relative to the notebook**. This is a much easier rule to remember.

So that's the gist, Jupyter makes paths easier to work with. And because our project used a lot of paths (see the `pipeline/` directory), nice logic for that was effectively essential.

<br/>

# 2. Collecting Outages

The code for collecting the outages is a bit complex, so I want to go over more details about it and tie it into a bit of a tutorial on Git as well.

First, some information. Python doesn't have a native way to interact with Git. Remember that Git is a piece of software like any other. What Python can do, however, is interact with the command line. These are called **subprocesses**. So, if you want to run a command line command using Python, you can **spawn** a subprocess. So that's what is going on here:

```python [1.acquire.ipynb]
result = subprocess.run(
  ["git", "clone", "https://github.com/outages/bchydro-outages.git", f"./{repoName}"],
  cwd=target,
  capture_output=True,
)
```

This simply translates to `git clone https://github.com/outages/bchydro-outages.git`{lang="shell"}, plus a little extra to control where the repository is cloned to.

The cool part is that, in Python, the script won't continue until after the subprocess has wrapped up. In other words, this is a **synchronous** operation, as opposed to an **asynchronous** operation where Python started the clone and just kept going without waiting for it to finish.

## Getting History

Each commit in the outages repo represents the outages that were ongoing at that point in time. We need a way to turn that into historical data. The first step is to reduce our dataset into something manageable. So once again, we'll be working with git.

The `git log` command will be particularly useful. On its own, this command will show you information on every commit made from newest to oldest, but if you run it, you'll notice that it's rather verbose and not very machine readable (and it's got that weird "press enter to scroll" thing going on).
> Type 'q' in the command line to quit the log viewer*

Fortunately for us, Git has a bunch of options that we can use to control the output. Here's the ones I used:

```shell
git log --before="2025-01-02" --since="2024-01-01" --pretty=format:%H:%ct --reverse 
```

1) `--before`: Only log commits before this date
2) `--since`: Only log commits after this date
    - Together these options allow us to specify a date range of commits to return
3) `--pretty=format:%H:%ct`: This controls the format of the output through something called a **format string**. When Git encounters one of these strings, it will replace it with relevant information ([All available replacements](https://git-scm.com/docs/pretty-formats)).
    - `%H` -> The commit hash (a unique identifier for the commit)
    - `:` -> Not part of the format string, this colon will appear in the output as-is (I use it as a separator)
    - `%ct` -> The commit date (in UNIX time, i.e. seconds since January 1st, 1970)
4) `--reverse`: This reverse the order of the output, changing to oldest first. This will be useful to us later.

Note that the `--pretty` option also gets rid of the scrolling-output thing. Here's a sample of what we get:
```sh [git log output]
$ git log --before="2025-01-02" --since="2024-01-01" --pretty=format:%H:%ct --reverse 

666719985046654a07de9f375424ff741c76bc03:1704163158
90f3058db900de8cdec78cdc8d703f8643bca356:1704163626
432a5b6c31a31705e150218cfc7cdcb28d38baa6:1704164904
fe8cc40d10aa32dfe535ba8938fb2ab24928b097:1704165758
cc13d5d616c2be0ac2c3f9bd8665cc1334cb5886:1704166366
...
```

Real quick, the way I get this data back into Python is via the `capture_output=True` option when I create the subprocess. This makes a little more sense if you done any work with Unix systems, but it effectively changes Python to be the "stdout" location rather than your command line. Learning more about "stdout" and "stderr" might be a good idea, but is beyond the scope of what I want to talk about.

## Reading the Commits
Now that we have the commit history, the next goal is to read each commit to get the active outages out of them.

You might be familiar with `git checkout` if you've ever had to switch branches. What it does is changes your current git environment (and hence, what files and revisions you see) to the state of a specific location. Well, we can also use this command to get the state of a specific commit. 

Here's the plan
1) For each commit: `git checkout someCommit`{lang="shell"}
2) Read the `bchydro-outages.json`{lang="json"} file at that point in time
3) Save the contents of it somewhere

Now, you're mostly caught up with how it all works. We work from oldest commit to newest, because each commit only stores info on the active outages. In order to figure out when outages end, we keep track of each outage we come across and only "publish" it to the CSV once a commit no longer mentions it.

Of course, let me know if you have any other questions about this. Happy to elaborate wherever needed.
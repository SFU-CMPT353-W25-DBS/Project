# CMPT353 Spring 2025 | Geospatial Data Analysis of Power Outages and Impacted Areas

## Objective
Our project aims to investigate whether power outages in British Columbia vary in severity across different geographic areas, potentially indicating disparities within regional access to reliable electricity.

## Setting up your environment

> [!IMPORTANT]
> Before contributing to the repo, please make sure you have done the following:
> ### 1) Install the required packages
> *Run the following command:*
> ```sh
> pip install -r requirements.txt
> ```
> ### 2) Configure commit "linting":
> *Run the following command:*
> ```sh
> nbstripout --install --attributes .gitattributes
> ```
> This will configure a Git Hook which will remove the output cells of Jupyter Notebooks before committing to the repo (you only need to run this once)

## Running the program
In order to get the code up an running, you'll need to run a few different programs. They have all been named according to their step. (**Please choose between either running 1.acquire or 1a.spoof, not both.**) :
- `1.acquire.ipynb`: This program is used to download the data from BC Hydro outages and save it to a sub directory. It processes it to a Pandas-compatible format.
- `1a.spoof.ipynb`: This program allows you to choose one of the sample datasets into the pipeline. ***Recommended when first trying the program.***
- `2.filter.ipynb`: This code cleans the data acquired from outages file to remove outliers and prepares it for analysis.
- `3.distances.ipynb`: This program computes the distance of each power outage to its closest landmarking features.
- `4.analysis`: This directory contains different programs which will analyze the data.
- `5.visualize`: This directory contains different programs which will visualize the data.

All programs can be run through jupyter notebook.


## Authors
- **Dorsa Azarbayjani** (daa43) @d0rsa
- **Bea MacDonald** (bma89) @Q-Bea
- **Soumya Parmar** (spa222) @sousmiley

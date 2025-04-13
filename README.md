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

## Requirements
The [requirements.txt](https://github.com/SFU-CMPT353-S25-DBS/Project/blob/main/requirements.txt) file indicates the required libraries you'll need for the project. Please ensure that you have Git set up.

```bash
pip install -r "requirements.txt"
```

Content under the `web/` directory is not necessary for the analysis portion of the project and can be ignored. It is only used for the web application portion of our report containing supplementary information and interactive visualizations.

Minimum version of Python required is Python 3.10. Tested on Python 3.12


## Running the program
In order to get the code up an running, you'll need to run a few different Jupyter notebooks. They have all been named according to their step. (**Please choose between either running 1.acquire or 1a.spoof, not both.**) :
- `1.acquire.ipynb`: This program is used to download the data from BC Hydro outages repository and compile it into a Pandas-compatible format. It will also created the `pipeline` directory and the `1.csv.gz` pandas archive, which will be consumed by subsequent steps.
- `1a.spoof.ipynb`: Instead of downloading data from the outages repository, a compute-intensive process, simply copy a pregenerate sample file into the `pipeline` directory in the expected format. ***Recommended when first trying the program.***
- `2.filter.ipynb`: This code cleans the data acquired from acquired outages file to remove outliers and prepares it for analysis. Results will be saved as `pipeline/2.csv.gz`.
- `3.distances.ipynb`: This program computes the distance of each power outage to its closest landmarking features. Will be saved as `pipeline/3.csv.gz`.
- `4.analysis`: This directory contains different programs which will analyze the data.
- `5.visualize`: This directory contains different programs which will visualize the data, such as plots, graphs and interactive maps. The generated HTML files can then be manually copied into the web-folder when ready for deployment to the static web server

## Other notes
- This should be done automatically by nature of using Jupyter Notebooks, but in case of failure, the CWD should be set to the same directory as the current Jupyter Notebook you are running

- `code/_datasets` contains most of our raw data, with the exemption of the outages data which is acquired from the GitHub repository on request. This allows us to theoretically analyze data in real-time, and keeps this repository lightweight.


## Authors
- **Dorsa Azarbayjani** (daa43) [@d0rsa](https://github.com/d0rsa)
- **Bea MacDonald** (bma89) [@Q-Bea](https://github.com/Q-Bea)
- **Soumya Parmar** (spa222) [@sousmiley](https://github.com/sousmiley)
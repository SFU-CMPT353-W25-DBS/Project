import pandas as pd

# Convert to datetime (some timestamps are in ms unix and some are in s unix so this accounts for that)
outagesTimestampInfo = [
  ("dateOn", "s"),
  ("dateOff", "ms"),
  ("lastUpdated", "ms"),
  ("crewEta", "ms"),
  ("crewEtr", "ms"),
  ("estDateOn", "ms"),
]
"""
List of tuples containing the name and type of timestamps within the outages data
"""

outagesTimestampFields = [o[0] for o in outagesTimestampInfo]
"""
List of timestamp field names within the outages data
"""


def get_dataframe_from_pipeline(path: str) -> pd.DataFrame:
  """
  Imports a CSV file from the pipeline directory with timestamps converted and returns it as a dataframe

  Args:
    path (str): Path to the CSV file in the pipeline directory. The path should be relative to **the calling file**.

  Example:
    >>> df = get_dataframe_from_pipeline("../pipeline/3.csv.gz")
  """
  return pd.read_csv(
    path, compression="gzip", parse_dates=outagesTimestampFields, header="infer"
  )

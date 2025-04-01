timeStampFields = [
  ("dateOn", "s"),
  ("dateOff", "ms"),
  ("lastUpdated", "ms"),
  ("crewEta", "ms"),
  ("crewEtr", "ms"),
  ("estDateOn", "ms"),
]
"""
Fields in the outage CSV and input JSON that are timestamps. 

In processing, ignore the second part (s/ms/...). It is just for ingress
"""

csvFileName = "outages.csv.gz"
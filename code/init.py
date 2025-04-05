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
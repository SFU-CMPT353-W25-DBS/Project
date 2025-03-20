# Observations about data:

1) The the true "back online" time often doesn't align with BC hydro's own reporting
2) The "dateOn" column is an estimate of when the power will be back online
3) Timestamps provided in the API are in America/Vancouver timezone (PST/PDT)
4) BC Hydro tends to use a to-the-minute accuracy for dateOff, but dateOn is rounded to the nearest hour, or quarter hour, or is sometimes exact (it's not clear what the rounding rules are)

5) Sometimes the number of customers affected is just wrong
6) About 50% of outages labeled as "Under investigation" affected less than 4 people
7) The majority of outages are planned
8) Sechelt exists and has a concerning number of power outages
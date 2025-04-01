import pandas as pd
import numpy as np

def haversine(lat1, lon1, lat2, lon2):
    # reference : exercise 3, calc_distance.py haversine formula
    # Note : the radius of Earth is 6371 km
    radiusOfEarth = 6371.0 
    dLat = np.radians(lat2 - lat1)
    dLon = np.radians(lon2 - lon1)
    formulaA = (np.sin(dLat / 2)**2) + np.cos(np.radians(lat1)) * np.cos(np.radians(lat2)) * (np.sin(dLon / 2)**2)
    formulaC = 2 * np.arctan2(np.sqrt(formulaA), np.sqrt(1 - formulaA))
    distance = radiusOfEarth * formulaC
    return distance

def distance_between_substation_outage(outages, substations):
    # get outage coordinates and substation coordinates
    outagesLat = pd.DataFrame(outages['latitude'].values).values
    outagesLong = pd.DataFrame(outages['longitude'].values).values
    substationsLat = substations['latitude'].values
    substationsLong = substations['longitude'].values

    # calculates the distance between each outage and each substation
    distances = haversine(outagesLat, outagesLong, substationsLat, substationsLong)
    return distances

# calculates the closest substation for each outage
def shortest_distance(outages, substations):
    distances = distance_between_substation_outage(outages, substations)

    # find the nearest distance between each substation and outage
    nearestDistances = distances.min(axis = 1)
    # for each outage, get the index of the shortest distance
    shortestDistanceIndexes = distances.argmin(axis = 1)
    # get the nearest substation corressponding to the shortest distance
    nearestSubstations = substations.iloc[shortestDistanceIndexes]
    
    closestSubstationsToOutages = pd.DataFrame({
        "outage_id": outages['id'],
        "outage_gisId": outages['gisId'],
        "nearest_substation_id": nearestSubstations['id'].values,
        "nearest_substation_name": nearestSubstations['name'].values, # For 'unknowns' in this column, replace with municipality?
        "distance_km": nearestDistances,
        "outage_regionName": outages['regionName'],
        "outage_municipality": outages['municipality'],
        "outage_area": outages['area'] 
        # Could include more info if needed
    })
    
    return closestSubstationsToOutages

def get_outages(filename):
    outage = pd.read_csv(filename)
    outagesCopy = outage[['id', 'gisId', 'latitude', 'longitude', 'municipality', 'area', 'regionName']].copy()
    outagesCopy['latitude'] = outagesCopy['latitude'].astype(float)
    outagesCopy['longitude'] = outagesCopy['longitude'].astype(float)
    return outagesCopy

def get_substations(filename):
    substation = pd.read_csv(filename)
    substationsCopy = substation[['ID', 'NAME', 'LATITUDE', 'LONGITUDE']].copy()
    # rename column headers to match overall style
    substationsCopy.columns = ['id', 'name', 'latitude', 'longitude']
    substationsCopy['latitude'] = substationsCopy['latitude'].astype(float)
    substationsCopy['longitude'] = substationsCopy['longitude'].astype(float)
    return substationsCopy

if __name__ == "__main__":
    outages = get_outages("outages.csv")
    substations = get_substations("BC_substation_location.csv")

    closestSubstationsToOutages = shortest_distance(outages, substations)
    
    csvFileName = "shortest_distances.csv"
    closestSubstationsToOutages.to_csv(csvFileName, index = False)
    print("Data has been exported into '"+ csvFileName +"'")

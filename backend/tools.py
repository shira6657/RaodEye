import urllib.request
import json

def align(colorCode):
    if colorCode in [14,17,47,50,51,52,54,56,59,77,98]:
      return "Red"
    if colorCode in [6,5,8,15,20,21,22,23,24,27,37,26,29,76,79,86,93,94,97,99,7]: 
        return "Gray"
    if colorCode in [65,69,73]:
        return "Gold"
    if colorCode in [1,9,13,28,40,41,42,43,44,45,46,48,49,74,95,96]:
        return "Green"
    if colorCode in [34,35,78,84,3,30,31,36,38,91]:
        return "Blue"
    if colorCode in [64,19]:
        return "Orange"
    if colorCode in [66,67,68,80,81,87]:
        return "White"
    if colorCode in [70,71,72,88,8,58,92]:
        return "Brown"
    if colorCode in [10,11,12,2]:
        return "Black"
    if colorCode in [4,16,60,61,62,63]:
        return "Yellow"
    if colorCode in [53,57,75,85]:
        return "Lavender"
    if colorCode in [32,33,39]:
        return "Light Blue"
    if colorCode==55:
        return "Pink"
    else:
        return "No color"


def Imut(listOfCars):
    newListOfCars = []
    for car in listOfCars:
        carColor = send_number_to_server(car["plate"])
        if carColor == []:
            newListOfCars.append({"plate": car["plate"], "color": car["color"], "notes": False})
        else:
            if not carColor == 0 and isEqual(car["color"], carColor):
                newListOfCars.append({"plate": car["plate"], "color": car["color"], "notes": True})
            else:
                newListOfCars.append({"plate": car["plate"], "color": car["color"], "notes": "not similar"})
    return newListOfCars


def isEqual(movieColor, rlbdColor):
    return (movieColor == align(rlbdColor))


def send_number_to_server(number):
    url = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&" + "q={}".format(
        number)
    try:
        with urllib.request.urlopen(url) as response:
            data= response.read().decode('utf-8')

            # Parse the JSON string
            parsed_data = json.loads(data)

            # Access the desired data
            result = parsed_data['result']
            records = result['records']

            # Print the records
            for record in records:
                print(record)

            if records:
                return parsed_data['result']['records'][0]['tzeva_cd']
            else:
                print('No records found.')

    except urllib.error.URLError as e:
        return []




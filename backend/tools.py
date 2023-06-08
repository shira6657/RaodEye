import urllib.request
import json


def Imut(listOfCars):
    newListOfCars = []
    for car in listOfCars:
        carColor = send_number_to_server(car["ID"])
        if carColor == None:
            newListOfCars.append({"ID": car["ID"], "COLOR": car["COLOR"], "notes": "not found"})
        else:
            if not carColor == 0 or isEqual(car["COLOR"], carColor):
                newListOfCars.append({"ID": car["ID"], "COLOR": car["COLOR"], "notes": ""})
            else:
                newListOfCars.append({"ID": car["ID"], "COLOR": car["COLOR"], "notes": "not similar"})
    return newListOfCars


def isEqual(movieColor, rlbdColor):
    return (movieColor == rlbdColor)


def send_number_to_server(number):
    url = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&" + "q={}".format(
        number)
    try:
        with urllib.request.urlopen(url) as response:
            data = response.read().decode('utf-8')

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
        return None




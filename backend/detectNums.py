import requests
from pprint import pprint

def detect_Num(img):
    regions = ['mx', 'us-ca'] # Change to your country
    with open(img, 'rb') as fp:
        try:
            response =   requests.post(
                'https://api.platerecognizer.com/v1/plate-reader/',
                data=dict(regions=regions, mmc=True),  # Optional
                files=dict(upload=fp),
                headers={'Authorization': 'Token 03e9c15239c2b0db66f81f3d4daefb0410bb7372'})
        except :
            print("err")
            return []
        
    my_object =  response.json()
    cars = []
    for result in my_object['results']:
        car = {
            'pixels': result['vehicle']['box'],
            'plate': result['plate']
        }
        cars.append(car)
    return cars
import urllib.request
import json



def send_number_to_server(number):
    url = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&"+"q={}".format(number)
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
                # Accessing the value of 'tzeva_rechev'
                tzeva_rechev_word = parsed_data['result']['records'][0]['tzeva_rechev']
                tzeva_rechev_value = parsed_data['result']['records'][0]['tzeva_cd']
                # Printing the value
                print(tzeva_rechev_word)
                print(tzeva_rechev_value)
            else:
                print('No records found.')

    except urllib.error.URLError as e:
        print('Error sending the request:', e)
        
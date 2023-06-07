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

import cv2

# Open the video file
cap = cv2.VideoCapture('movie.mp4')

# Get the frames per second (fps) of the video
fps = cap.get(cv2.CAP_PROP_FPS)

# Calculate the frame number for the second 30
frame_number = int(fps * 30)

# Set the current frame to the desired frame number
cap.set(cv2.CAP_PROP_POS_FRAMES, frame_number)

# Read the frame at the specified frame number
ret, frame = cap.read()

# Check if the frame was read successfully
if ret:
    # Save the frame as an image
    cv2.imwrite('frame_30s.jpg', frame)
    print('Frame at 30 seconds saved successfully.')

# Release the video capture object and close any open windows
cap.release()
cv2.destroyAllWindows()









# # Load the image
# image = cv2.imread('frame1.png')
# if image is None:
#     print('Error: Failed to load the image')

# path_to_tesseract = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
# pytesseract.tesseract_cmd = path_to_tesseract

# # Preprocess the image
# #gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
# gray = cv2.imread('frame1.png', cv2.IMREAD_GRAYSCALE)

# # Apply thresholding or other preprocessing techniques if required
# # For example, you can use adaptive thresholding to handle different lighting conditions
# # thresh = cv2.adaptiveThreshold(gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY_INV, 11, 4)

# # Perform OCR using Tesseract
# result = pytesseract.image_to_string(gray, config='--psm 6 -c tessedit_char_whitelist=0123456789')

# # Print the recognized numbers
# print(result)
        
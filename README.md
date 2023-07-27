# RoadEye

## Prerequisites

- Python 3.8+ and pip
- NodeJS 18+ and npm

## Getting Started

### Install Python and JavaScript libraries:

```bash
cd ./backend
pip3 install -r requirements.txt
cd ../frontend
npm install
```

### Run the API server:

```bash
cd ./backend
python -m uvicorn main:app --reload
```

### Run the Frontend React development server:

```bash
cd ./frontend
npm start
```

## About the Code

The algorithm is as follows:
- Cut the video from the 20th to the 40th second (assuming the offense is in the middle of the video).
- Split the video into frames.
- For each frame:
    * Recognize the license number using the platerecognizer API.
    * Recognize the vehicle type using the platerecognizer API.
    * Crop the frame to get only the vehicle from the whole image using the bounding box (returned from the API request).
    * Recognize the color by analyzing the image's pixels.
- Validate the data using the Israeli government API.

## About the Plate Recognizer API

This API offers a free trial, but it is limited.

We are currently using the free trial, which is limited to up to 2,500 requests per user.

If you decide to upgrade to the paid trial, you will be able to retrieve the color of the vehicle with more accuracy than our current algorithm.

Please note: If you run the code and encounter issues, we recommend checking the error returned from the API request. If you receive error code 403, it means that your trial has ended, and you need to upgrade to the paid trial (or create a new user).

You can read more here: [Plate Recognizer API Documentation](https://docs.platerecognizer.com/#introduction)

And here: [Plate Recognizer Website](https://platerecognizer.com/)

--------------------------


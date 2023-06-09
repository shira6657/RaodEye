from flask import send_from_directory
from fastapi import APIRouter, Body, Request, Response, HTTPException, status,UploadFile
from fastapi.encoders import jsonable_encoder
from typing import List
from fastapi import UploadFile, File
from models import Task, TaskUpdate
import base64
from collectInfoCars import start
from tools import Imut
import json
import os
router = APIRouter()

def get_unique_by_field(arr, field):
    unique_values = set()
    unique_arr = []
    
    for item in arr:
        if item[field] not in unique_values:
            unique_values.add(item[field])
            unique_arr.append(item)
    
    return unique_arr

@router.post("/getVideo")
async def send_video(request:Request):
     data = await request.json()
     video_data =  base64.b64decode(data['value'].split(",")[1])
    
     with open("video_car.mp4", "wb") as video_file:
          video_file.write(video_data)
     a = await start("video_car.mp4")
     unique_dicts = []

# Iterate through the list and add unique dictionaries to the new list
     unique_dicts = get_unique_by_field(a,"plate")
   
     return Imut(unique_dicts)


import http.server
import socketserver

PORT = 8000
DIRECTORY = './cropped'  # The directory containing your static files

Handler = http.server.SimpleHTTPRequestHandler

# Change the current working directory to the static directory
# This is important so that the server can find the static files
os.chdir(DIRECTORY)

# Start the server
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("Serving at port", PORT)
    httpd.serve_forever()
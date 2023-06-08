from fastapi import APIRouter, Body, Request, Response, HTTPException, status,UploadFile
from fastapi.encoders import jsonable_encoder
from typing import List
from fastapi import UploadFile, File
from models import Task, TaskUpdate
import base64
from collectInfoCars import start
from tools import Imut
import json
router = APIRouter()


@router.post("/getVideo")
async def send_video(request:Request):
     data = await request.json()
     video_data =  base64.b64decode(data['value'].split(",")[1])
    
     with open("video_car.mp4", "wb") as video_file:
          video_file.write(video_data)
     a = await start("video_car.mp4")
#     response_body = json.dumps(a)
#     print("BLALALAL",response_body)
#     return response_body
     # print(a)
     # return a
     return Imut(a)
    # print(a)
    # return a 
    # return {} #return none





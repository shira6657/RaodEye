from fastapi import APIRouter, Body, Request, Response, HTTPException, status,UploadFile
from fastapi.encoders import jsonable_encoder
from typing import List
from fastapi import UploadFile, File
from models import Task, TaskUpdate
import base64
router = APIRouter()


@router.post("/getVideo")
async def send_video(request:Request):
    data = await request.json()
    video_data = base64.b64decode(data['value'].split(",")[1])
    
    with open("video_car.mp4", "wb") as video_file:
        video_file.write(video_data)
    start("video_car.mp4")
    return {} #return none





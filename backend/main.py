# credit: https://github.com/mongodb-developer/pymongo-fastapi-crud
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import dotenv_values
from routes import router as video_router
from fastapi.staticfiles import StaticFiles
import ssl

ssl._create_default_https_context = ssl._create_unverified_context
dotenv_values(".env")

app = FastAPI()
app.mount("/cropped", StaticFiles(directory="cropped"), name="static")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://localhost"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(video_router, tags=["videos"], prefix="/api/v1/videos")

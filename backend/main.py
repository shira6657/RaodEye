# credit: https://github.com/mongodb-developer/pymongo-fastapi-crud
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
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


@app.on_event("startup")
def startup_db_client():
    app.mongodb_client = MongoClient(
        os.getenv("MONGO_IP"),
        username=os.getenv("MONGO_USER"),
        password=os.getenv("MONGO_PASSWORD"),
    )
    app.database = app.mongodb_client["bootcamp"]


@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()


app.include_router(video_router, tags=["videos"], prefix="/api/v1/videos")

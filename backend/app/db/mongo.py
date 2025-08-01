from motor.motor_asyncio import AsyncIOMotorClient
from app.core.config import MONGO_URI, MONGO_DB

class MongoDB:
    def __init__(self):
        self.client = AsyncIOMotorClient(MONGO_URI)
        self.db = self.client[MONGO_DB]
        self.logs = self.db["logs"]

db = MongoDB()
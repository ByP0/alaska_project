import asyncio
import os
from motor.motor_asyncio import AsyncIOMotorClient
from pymongo import ASCENDING
from dotenv import load_dotenv

load_dotenv()

async def wait_for_mongo(uri, timeout=30):
    for _ in range(timeout):
        try:
            client = AsyncIOMotorClient(uri)
            await client.admin.command("ping")
            return client
        except:
            await asyncio.sleep(1)
    raise Exception("MongoDB connection failed")

async def migrate():
    uri = os.getenv("MONGO_URI")
    db_name = os.getenv("MONGO_DB")
    client = await wait_for_mongo(uri)
    db = client[db_name]
    await db["logs"].create_index([("timestamp", ASCENDING)])
    print("✅ Migration complete")

if __name__ == "__main__":
    asyncio.run(migrate())

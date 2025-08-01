from fastapi import FastAPI
from app.api import health, log

app = FastAPI()

app.include_router(health.router)
app.include_router(log.router)

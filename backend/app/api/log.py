from fastapi import APIRouter, Request
from fastapi.responses import JSONResponse
from app.db.mongo import db
from app.models.log import LogEntry

router = APIRouter(tags=["Logging"])

@router.post("/log", summary="Сохранить лог перехода")
async def log_visit(request: Request):
    headers = request.headers
    ip = request.client.host
    user_agent = headers.get("user-agent", "unknown")
    referer = headers.get("referer")

    log = LogEntry(ip=ip, user_agent=user_agent, referrer=referer)
    await db.logs.insert_one(log.dict())

    return JSONResponse(status_code=201, content={"message": "Log saved"})

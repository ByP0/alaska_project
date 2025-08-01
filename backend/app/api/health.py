from fastapi import APIRouter
from app.db.mongo import db

router = APIRouter(tags=["Health"])

@router.get("/health", summary="Проверка статуса MongoDB")
async def healthcheck():
    try:
        await db.db.command("ping")
        return {"status": "ok"}
    except Exception:
        return {"status": "error"}

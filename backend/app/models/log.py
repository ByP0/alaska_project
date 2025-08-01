from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class LogEntry(BaseModel):
    ip: str
    user_agent: str
    referrer: Optional[str] = None
    timestamp: datetime = Field(default_factory=datetime.utcnow)

import os
from pathlib import Path
from pydantic import BaseModel
from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR / ".env")

class Settings(BaseModel):
    app_name: str = "ReceiptDesk AI"
    version: str = "1.0.0"
    host: str = os.getenv("HOST", "0.0.0.0")
    port: int = int(os.getenv("PORT", 8000))
    debug: bool = os.getenv("DEBUG", "false").lower() == "true"
    
    # Gemma Model Settings
    gemma_model_name: str = os.getenv("GEMMA_MODEL_NAME", "gemma-2-2b-it")
    gemma_inference_mode: str = os.getenv("GEMMA_INFERENCE_MODE", "local_fallback")
    ollama_base_url: str = os.getenv("OLLAMA_BASE_URL", "http://localhost:11434")
    
    # Storage and Vector Database
    storage_backend: str = os.getenv("STORAGE_BACKEND", "sqlite")
    local_db_path: str = os.getenv("LOCAL_DB_PATH", str(BASE_DIR / "data" / "receiptdesk.db"))
    tiger_data_pg_url: str = os.getenv("TIGER_DATA_PG_URL", "")
    
    # Paths
    base_dir: Path = BASE_DIR
    data_dir: Path = BASE_DIR / "data"
    uploads_dir: Path = BASE_DIR / "uploads"
    sample_data_dir: Path = BASE_DIR / "app" / "sample_data"

settings = Settings()
settings.data_dir.mkdir(parents=True, exist_ok=True)
settings.uploads_dir.mkdir(parents=True, exist_ok=True)

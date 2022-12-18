from fastapi import APIRouter, status, Body, Header
from requests import post
import os

router = APIRouter(prefix="/api")
DISCORD_HOOK_URL = os.environ.get("DISCORD_HOOK_URL")

@router.post("/send", status_code=status.HTTP_204_NO_CONTENT, response_model=None)
def send(raw_payload: dict = Body(), event: str = Header(default=..., alias="X-GitHub-Event")):
    content = f"{event.upper()} 했어요! -{raw_payload['sender']['login']}-\n레포지토리 : {raw_payload['repository']['name']}\n"
    if "compare" in raw_payload:
        content += f"변경점 확인 : {raw_payload['compare']}"

    res = post(url=DISCORD_HOOK_URL, data={ "content": content })

@router.post("/echo", status_code=status.HTTP_200_OK, response_model=None)
def echo(body: dict = Body()):
    post(url=DISCORD_HOOK_URL, data={ "content" : body["m"]})
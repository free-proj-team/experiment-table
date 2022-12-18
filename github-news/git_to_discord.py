from fastapi import APIRouter, status, Body, Header
from requests import post

router = APIRouter(prefix="/api")
DISCORD_HOOK_URL = "https://discord.com/api/webhooks/1053971440677965885/mBIPnG_RmOFSQkANi1mK_p9NtmABvJ1Mp9rr9ze_N1jRrJJNapGgfOivWs5nm4U2guWV"

@router.post("/send", status_code=status.HTTP_204_NO_CONTENT, response_model=None)
def send(raw_payload: dict = Body(), event: str = Header(default=..., alias="X-GitHub-Event")):
    content = f"{event.upper} 했어요! -{raw_payload['sender']['login']}-\n레포지토리 : {raw_payload['name']}\n"
    if "compare" in raw_payload:
        content += f"변경점 확인 : {raw_payload['compare']}"

    post(url=DISCORD_HOOK_URL, data={ "content": content }, headers={ "Content-Type": "application/json" })

@router.post("/echo", status_code=status.HTTP_200_OK, response_model=None)
def echo(body: dict = Body()):
    post(url=DISCORD_HOOK_URL, data={ "content" : body["m"]})
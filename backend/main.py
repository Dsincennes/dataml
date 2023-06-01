from fastapi import FastAPI
from fastapi import HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Replace with your React app's origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/token")
async def exchange_token(code: str):
    try:
        # Set up the required parameters for the token exchange
        token_url = 'https://oauth2.googleapis.com/token'
        client_id = '464650243008-htr6rdeblfdus820trpt7apjmo9nl86u.apps.googleusercontent.com'
        client_secret = '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'
        redirect_uri = 'http://localhost:3000'
        
        # Send a POST request to exchange the authorization code for a refresh token
        async with httpx.AsyncClient() as client:
            response = await client.post(
                token_url,
                data={
                    'code': code,
                    'client_id': client_id,
                    'client_secret': client_secret,
                    'redirect_uri': redirect_uri,
                    'grant_type': 'authorization_code'
                }
            )

            # Check if the request was successful
            if response.status_code == 200:
                return response.json()
            else:
                raise HTTPException(status_code=response.status_code, detail=response.text)
    except httpx.RequestError as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@app.post("/api/refresh_token")
async def refresh_token(code: str):
    try:
        # Set up the required parameters for the token exchange
        token_url = 'https://oauth2.googleapis.com/token'
        client_id = '464650243008-htr6rdeblfdus820trpt7apjmo9nl86u.apps.googleusercontent.com'
        client_secret = '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'
        redirect_uri = 'http://localhost:3000'
        print("hello")
        # Send a POST request to exchange the authorization code for a refresh token
        async with httpx.AsyncClient() as client:
            response = await client.post(
                token_url,
                data={
                    'client_id': client_id,
                    'client_secret': client_secret,
                    'redirect_uri': redirect_uri,
                    'refresh_token': code,
                    'grant_type': 'refresh_token'
                }
            )

            # Check if the request was successful
            if response.status_code == 200:
                return response.json()
            else:
                raise HTTPException(status_code=response.status_code, detail=response.text)

    except httpx.RequestError as e:
        raise HTTPException(status_code=500, detail=str(e))


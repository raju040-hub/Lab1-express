**Live Demo:** https://web-development-labs.onrender.com
# Lab 1: Node.js and Express server

**Name:** Avula Raju  
**Registration Number:**252U1R1017
**Section:** CSE CORE
**Live Link:** Not deployed yet

## How to Run

### Install dependencies

```bash
npm install


## Endpoints

| Method | Path | Description |
|---|---|---|
| GET | `/` | Returns a welcome message. |
| GET | `/about` | Returns the name and section as JSON. |
| GET | `/time` | Returns the current date and time. |
| GET | Unknown path | Returns a 404 response for unknown routes. |

## Screenshots

### Home

![Home route](screenshots/home.png1.jpeg)

### About

![About route](screenshots/about.png1.jpeg)

### Time

![Time route](screenshots/time.png1.jpeg)


## Notes

### Problems Faced and Solutions

1. **Port 3000 was already in use**
   - The server showed an `EADDRINUSE` error because another server was already running on port 3000.
   - Stopped the previous server before starting the new one.

2. **Incorrect Express response method order**
   - Initially used `response.send.status()`.
   - Corrected it to `response.status(404).send()` for the 404 response.

3. **Browser returned 304 while checking `/about`**
   - The browser was using its cached response.
   - Enabled "Disable cache" in the Network tab and reloaded the page to verify the `200` status.
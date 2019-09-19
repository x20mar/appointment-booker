# Installation

## Known issues

* arrows are not appearing on the date time pickers but buttons do work
* docker environment does not show emails preview (known issue see https://github.com/niftylettuce/email-templates/issues/315) Use the local demo for see this funcationality

## Installation of Docker Demo

### 1. Build Dockerfile

`docker build -t appointment-booker .`

### 2. Run Docker Container

```bash
docker run -p 127.0.0.1:3000:3000 -P -d appointment-booker
```

In a browser open 'http://localhost:3000'

## Installation of local Demo

1. cd into `app`
2. run `npm install`
3. run `npm run start`
4. In a browser open 'http://localhost:3000'

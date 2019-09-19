# Installation of Docker Demo

## 1. Build Dockerfile

`docker build -t appointment-booker .`

## 2. Run Docker Container

```bash
docker run -p 127.0.0.1:3000:3000 -P -d appointment-booker
```

This will start the containiner and open a bash prompt in the containiner




## Note for deployment on VPS

### Dockerization of the application

#### Dockerfile

```dockerfile
FROM node:18.18-buster

WORKDIR /app

RUN git clone https://github.com/Anyanka2/pets-project-back.git .
COPY .env .env
EXPOSE 3030

RUN npm install

CMD ["npm", "start"] 

```
#### Manual start

```bash 
# go to directory with dockerfile and dotenv files. For example: 
cd ~/your-pets-back

# build docker image
docker build . -t your-pets-back:01.06.02

# in tag ":01.06.02" equal month.day.attempt
# then run docker app
docker run -p 3030:3030 --name your-pets-back your-pets-back:01.06.02

# for stop container
docker stop your-pets-back
# for remove container
docker container rm your-pets-back
```


### Скрипт автоматичної реініціалізації контейнера

```bash
#!/bin/bash
if [[ $(docker ps -a -q -f name="your-pets-back") ]]
  then
        echo "Stop existing container"
        docker stop your-pets-back
        echo "Remove existing container"
        docker container rm your-pets-back
fi

number_images=$( docker images --format '{{.ID}}' --filter reference=your-pets-back | wc -l )
echo "--------------------------------"
echo "Total images: $number_images"
if [[ $number_images -ge 4 ]]; then
        images_to_keep=$(docker images --format '{{.ID}} {{.CreatedAt}}' | sort -k2 -r |head -n 2 | awk '{print $1}')
        echo $images_to_keep
        docker images --quiet --filter "dangling=false" --filter reference=your-pets-back | grep -v "$images_to_keep" | xargs -r docker rmi
else
        echo "Number of images less then 4. Nothing to do."
fi

echo "list existing image tag"
docker images | grep your-pets-back

tagname=$(date +%m.%d.%S)
echo "Building Docker image with tag $tagname..."
docker build  $YOUR_PETS_BACK_DIR --no-cache -t your-pets-back:$tagname -f "$YOUR_PETS_BACK_DIR/dockerfile" 
echo "Running Docker container with tag $tagname..."
docker run -d -p 2004:3030 --name your-pets-back your-pets-back:$tagname
exit 0
```

### Скрипт перевірки, чи не оновився main репозиторію

```bash
#!/bin/bash

current_hash=$(curl -sL "Accept: application/vnd.github.v3+json"  https://api.github.com/repos/Anyanka2/pets-project-back/commits/main | jq '.sha')
cd $YOUR_PETS_BACK_DIR
known_hash=$(cat your-pets-repo-hash.conf)
echo "Current hash: $current_hash "
echo "Known hash: $known_hash "

if [[ $current_hash == $known_hash ]]; then
        echo "Nothing to do"
        exit 0
else
        echo "hmmm.... hash is different"
        ./your-pets-back-restart.sh;
        echo $current_hash > your-pets-repo-hash.conf
        exit 0
fi

```

### Systemd Unit file

```bash
[Unit]
Description=Check your-pets-back GitHub repo and update docker container

[Service]
ExecStart=your-pets-check-repo.sh

```

### Systemd Timer file

```bash
[Unit]
Description=Check repo Your pets back 

[Timer]
Unit=your-pets-back.service
OnBootSec=15m
OnUnitActiveSec=15m


[Install]
WantedBy=timers.target

```

both systemd file located in `/etc/systemd/system` directory.
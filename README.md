


## Docerize deploy on VPS

```bash 
# go to directory with dockerfile and dotenv files. For example: 
cd ~/your-pets-back

# build docker image
docker build . -t your-pets-back:01.06.02

# in tag ":01.06.02" equal month.day.attempt
# then run docker app

docker run -p 2004:3030 --name your-pets-back your-pets-back:01.06.02


# docker stop your-pets-back
# docker container rm your-pets-back
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

#read -p "enter tag-name like \"01.06.02\" equal month.day.attempt: " tagname
tagname=$(date +%m.%d.%S)
echo "entered tagname: $tagname"
echo "Building Docker image with tag $tagname..."
docker build . --no-cache -t your-pets-back:$tagname
echo "Running Docker container with tag $tagname..."
docker run -d -p 2004:3030 --name your-pets-back your-pets-back:$tagname
exit 0

```
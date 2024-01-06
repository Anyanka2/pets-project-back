


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
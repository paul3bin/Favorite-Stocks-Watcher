# DevProjects - Favorite stocks watcher

This is an open source project from [DevProjects](http://www.codementor.io/projects). Feedback and questions are welcome!
Find the project requirements here: [Favorite stocks watcher](https://www.codementor.io/projects/web/favorite-stocks-watcher-b0wexig802)

## Run Locally

- Install docker and docker-compose

```bash
sudo apt-get update
sudo apt-get install docker.io && sudo apt-get install docker-compose
```

OR visit [Docker Docs](https://docs.docker.com/) to see the installation process for your OS

- Go to [Finnhub](https://finnhub.io/) and create a new account

- Copy you API key and Sandbox API key from Finnhub dashboard

- Clone the project

```bash
git clone https://link-to-project
```

- Go to the project directory

```bash
cd Favorite-Stocks-Watcher
```

- Go to backend folder

```bash
cd backend
```

- Create a new file .env

```bash
touch .env
```

OR

```bash
new-item .env
```

- Paste your keys inside the file in following format

```bash
FINNHUB_API_KEY=<Your API key>
FINNHUB_SANDBOX_API_KEY=<Your Sandbox API key>
```

- Go back to the main project directory

```bash
cd ../
```

- Build the image

```bash
docker-compose build
```

- Run the containers

```bash
docker-compose up -d
```

- Go to [http://localhost:3000](http://localhost:3000) and start using the application.

- To stop the containers

```bash
docker-compose down
```

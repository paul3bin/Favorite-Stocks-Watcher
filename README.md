# Favorite Stock Watcher

This is a web app for following the details of stocks of companies you like. The application shows you the detailed information on stocks like, closing price, percentage change in price, opening price, and so on.

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
docker-compose run
```

- Go to [http://localhost:3000](http://localhost:3000) and start using the application.

- To stop the containers

```bash
docker-compose down
```

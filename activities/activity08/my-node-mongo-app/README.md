Nodejs and Mongo App

1. Dockerfile will create a Nodejs Application.
2. The Docker Compose file defines and runs the Node.js and MongoDB services.
3. From the root, (where the docker-compose.yml file is), run: docker-compose up --build
4. This command builds the Docker images and starts the containers.
5. Open browser and navigate to http://localhost:3000. You should see the "Hello, World!" message.
6. Open your browser and navigate to http://localhost:27017. You should see the "It looks like you are trying to access MongoDB over HTTP on the native driver port." message.
pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                // Checkout code from your GitHub repository
                git branch: 'main', url: 'https://github.com/keerthanam0089/Devops_aba.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }
        stage('Build Docker Image') {
            steps {
                // Build a Docker image for the application
                sh 'docker build -t your-image-name .'
            }
        }
        stage('Run Docker Container') {
            steps {
                // Run the Docker container
                sh 'docker run -d -p 3000:3000 --name app app:js'
            }
        }
    }
}

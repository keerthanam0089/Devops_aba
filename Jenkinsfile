pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t app:js .'
            }
        }
        stage('Run Docker Container') {
    steps {
        script {
            sh """
            # Stop and remove existing container if it exists
            docker ps -a | grep app && docker rm -f app || true
            
            # Run the new container
            docker run --name app app:js
            """
        }
    }
}

        stage('Run Docker Container') {
            steps {
                bat 'docker run --name app app:js'
            }
        }
    }
}

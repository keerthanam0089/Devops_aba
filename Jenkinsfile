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
            bat """
            docker ps -a | findstr app && docker rm -f app || echo "No container to remove"
            docker run --name app app:js
            """
        }
    }
}


    }
}

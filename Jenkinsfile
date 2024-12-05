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
                bat 'docker run -d -p 3000:3000 app app:js'
            }
        }
    }
}

pipeline {
    agent { docker { image 'node:20.16.0-alpine3.20' } }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }        
    }
}
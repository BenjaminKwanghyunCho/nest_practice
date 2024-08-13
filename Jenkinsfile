pipeline {
    agent { docker { image 'node:20.16.0-alpine3.20' } }
    stages {
        stage('Install') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Build') { 
            steps {
                sh 'npm run build' 
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }        
    }
}
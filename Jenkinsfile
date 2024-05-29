pipeline {
    agent any
    tools {
      nodejs '18.20.1'
      docker 'docker'
    }

    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
                sh 'docker build -t sonhn98/react-js-jenkins .'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm run test' 
            }
        }
        stage('Deploy') { 
            steps {
                sh 'npm run build' 
            }
        }
    }
}
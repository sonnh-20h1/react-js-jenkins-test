pipeline {
    agent any
    tools {
      nodejs '18.20.1'
    }

    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
                withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                  sh 'docker build -t sonhn98/react-js-jenkins .'
                  sh 'docker push sonhn98/react-js-jenkins .'
                }
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
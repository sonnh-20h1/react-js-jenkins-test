pipeline {
    agent any
    tools {
      nodejs '18.20.1'
    }

    stages {
        stage('Build') { 
            steps {
                script {
                  withDockerRegistry(credentialsId: 'docker-hub-01') {
                    sh 'docker build -t sonhn98/react-js-jenkins .'
                    // sh 'docker push sonhn98/react-js-jenkins'
                  }
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
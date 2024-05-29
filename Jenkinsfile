pipeline {
    agent any
    tools {
      nodejs '18.20.1'
    }

    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
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
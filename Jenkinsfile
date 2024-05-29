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
    }
}
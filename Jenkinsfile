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

    stages {
        stage('Test') { 
            steps {
                sh 'npm run test' 
            }
        }
    }

    stages {
        stage('Deploy') { 
            steps {
                sh 'npm run build' 
            }
        }
    }
}
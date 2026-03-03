pipeline {
    agent { label '' }

    stages {
        stage('Build & Deploy') {
            steps {
                sh '''
                docker rm -f portfolio-app || true
                docker-compose up --build -d
                '''
                }
          }
    }
}

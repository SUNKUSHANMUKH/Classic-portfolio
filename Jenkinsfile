pipeline {
    agent { label '' }

    stages {
        stage('Build & Deploy') {
            steps {
                sh '''
                docker compose down || true
                docker compose up --build -d
                '''
            }
        }
    }
}

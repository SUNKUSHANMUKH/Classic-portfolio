pipeline {
    agent any

    stages {

        stage('Verify Docker Access') {
            steps {
                sh 'docker --version'
                sh 'docker ps'
            }
        }

        stage('Build & Deploy with Docker') {
            steps {
                sh '''
                echo "Stopping old container if exists..."
                docker compose down || true

                echo "Building and starting new container..."
                docker compose up --build -d
                '''
            }
        }
    }

    post {
        success {
            echo 'Portfolio deployed successfully 🚀'
        }
        failure {
            echo 'Deployment failed ❌ Check logs ❌'
        }
    }
}

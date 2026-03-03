pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/SUNKUSHANMUKH/Classic-portfolio.git'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker compose down || true
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
            echo 'Deployment failed ❌ Check logs'
        }
    }
}
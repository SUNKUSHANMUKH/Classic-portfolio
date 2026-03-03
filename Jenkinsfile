pipeline {
    agent any

    stages {
        stage('Check Docker Access') {
    steps {
        sh 'whoami'
        sh 'docker --version'
        sh 'docker ps'
    }
}

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/YOUR_USERNAME/YOUR_PORTFOLIO_REPO.git'
            }
        }

        stage('Deploy with Docker') {
            steps {
                sh '''
                echo "Stopping old container..."
                docker stop portfolio-container || true
                docker rm portfolio-container || true

                echo "Building new Docker image..."
                docker build -t portfolio-image .

                echo "Running container..."
                docker run -d -p 3000:80 --name portfolio-container portfolio-image
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
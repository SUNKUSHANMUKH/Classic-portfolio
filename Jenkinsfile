pipeline {
    agent any

    environment {
        NODE_VERSION = '18'
        APP_NAME = 'portfolio'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/YOUR_USERNAME/YOUR_PORTFOLIO_REPO.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Portfolio') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test || true'
            }
        }

        stage('Create Production Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                echo "Deploying Portfolio..."

                # Stop old container if exists
                docker stop portfolio-container || true
                docker rm portfolio-container || true

                # Build Docker Image
                docker build -t portfolio-image .

                # Run new container
                docker run -d -p 3000:3000 --name portfolio-container portfolio-image
                '''
            }
        }
    }

    post {
        success {
            echo 'Portfolio deployed successfully 🚀'
        }
        failure {
            echo 'Build failed ❌ Check logs'
        }
    }
}

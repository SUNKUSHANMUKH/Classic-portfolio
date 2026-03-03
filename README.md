# 🚀 Classic Portfolio – CI/CD with Jenkins & Docker

This project demonstrates a complete **CI/CD pipeline** for a Vite + React portfolio application using:

* Jenkins (CI Server)
* Docker (Containerization)
* Docker Compose (Container orchestration)
* Nginx (Production web server)

The entire setup runs locally inside Docker and is fully automated.

---

# 🧱 Architecture Overview

```id="arch1"
Developer pushes code → GitHub  
        ↓  
Jenkins pulls latest code  
        ↓  
Builds Vite production bundle  
        ↓  
Builds Docker image (multi-stage)  
        ↓  
Deploys Nginx container  
        ↓  
Portfolio runs at http://localhost:3000
```

---

# 📁 Project Structure

```id="struct1"
Classic-portfolio/
│
├── dockerfile
├── docker-compose.yml
├── jenkins-compose.yml
├── Jenkinsfile
├── package.json
├── src/
└── README.md
```

---

# 🛠 Technologies Used

* React (Vite + TypeScript)
* Node.js 18 (Alpine)
* Docker
* Docker Compose
* Jenkins LTS
* Nginx Alpine

---

# ⚙️ Step 1 – Clone Repository

```bash id="cmd1"
git clone https://github.com/YOUR_USERNAME/Classic-portfolio.git
cd Classic-portfolio
```

---

# ⚙️ Step 2 – Start Jenkins

Start Jenkins container:

```bash id="cmd2"
docker compose -f jenkins-compose.yml up -d
```

Verify it is running:

```bash id="cmd3"
docker ps
```

Open Jenkins:

```id="url1"
http://localhost:8080
```

---

# 🔐 Step 3 – Unlock Jenkins

Get initial admin password:

```bash id="cmd4"
docker exec -it jenkins cat /var/jenkins_home/secrets/initialAdminPassword
```

Paste password in browser → Install suggested plugins → Create admin user.

---

# 🐳 Step 4 – Install Docker Inside Jenkins (One-Time Setup)

Enter Jenkins container:

```bash id="cmd5"
docker exec -it jenkins bash
```

Update packages:

```bash id="cmd6"
apt update
```

Install Docker CLI:

```bash id="cmd7"
apt install -y docker.io
```

Install Docker Compose:

```bash id="cmd8"
apt install -y docker-compose
```

Verify installation:

```bash id="cmd9"
docker --version
docker-compose --version
```

Exit container:

```bash id="cmd10"
exit
```

---

# 🐳 Dockerfile (Multi-Stage Build)

```dockerfile id="df1"
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Why Multi-Stage?

* First stage builds production files
* Second stage serves only optimized static files
* Final image is small and secure

---

# 🐳 docker-compose.yml (Application Deployment)

```yaml id="dc1"
services:
  portfolio:
    build: .
    container_name: portfolio-app
    ports:
      - "3000:80"
    restart: always
```

### Commands Used

Start application:

```bash id="cmd11"
docker-compose up --build -d
```

Stop application:

```bash id="cmd12"
docker-compose down
```

Remove container manually:

```bash id="cmd13"
docker rm -f portfolio-app
```

---

# 🤖 Jenkinsfile (CI/CD Pipeline)

```groovy id="jf1"
pipeline {
    agent any

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

    post {
        success {
            echo 'Portfolio deployed successfully'
        }
        failure {
            echo 'Deployment failed'
        }
    }
}
```

---

# 🧠 Why These Commands Are Used

### `docker rm -f portfolio-app || true`

* Removes existing container
* Prevents container name conflict
* `|| true` prevents pipeline failure if container does not exist

### `docker-compose up --build -d`

* `--build` → Rebuild image if changes exist
* `-d` → Run container in background
* Ensures latest code is deployed

---

# 🌍 Access the Application

After Jenkins build succeeds:

```id="url2"
http://localhost:3000
```

Your portfolio runs in production mode using Nginx.

---

# 🧪 Common Errors & Fixes

## 1️⃣ Docker Not Found

Error:

```id="err1"
docker: not found
```

Fix: Install docker inside Jenkins container.

---

## 2️⃣ Compose Not Found

Error:

```id="err2"
docker: 'compose' is not a docker command
```

Fix: Install `docker-compose`.

---

## 3️⃣ Container Name Conflict

Error:

```id="err3"
Conflict. The container name is already in use
```

Fix:

```bash id="cmd14"
docker rm -f portfolio-app
```

---

# 🔄 CI/CD Flow Summary

1. Code pushed to GitHub
2. Jenkins pulls latest commit
3. Docker image rebuilt
4. Old container removed
5. New container started automatically

---

# 📈 DevOps Concepts Demonstrated

* CI/CD Automation
* Multi-Stage Docker Build
* Containerized Deployment
* Jenkins Pipeline as Code
* Idempotent Deployment Strategy
* Infrastructure as Code

---

# 🚀 Future Enhancements

* Add automated testing stage
* Push Docker image to Docker Hub
* Add GitHub webhook trigger
* Add image version tagging
* Deploy to AWS EC2 / Azure / GCP

---

# ✅ Conclusion

This project demonstrates a complete local CI/CD workflow integrating Jenkins and Docker to automate build and deployment of a React production application.

It simulates a real-world DevOps pipeline in a local development environment.

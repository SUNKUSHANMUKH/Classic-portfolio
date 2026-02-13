import React from 'react';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width on large screens */}
          <div className="lg:col-span-2 space-y-6">
            {/* First Paragraph */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                DevOps Engineer and Full Stack Developer with comprehensive hands-on experience in designing,
                developing, automating, deploying, and maintaining scalable web applications and cloud-native systems.
                I possess strong expertise in CI/CD pipeline implementation using Jenkins and GitHub Actions,
                enabling automated build, test, and deployment workflows that improve development efficiency and
                reduce manual intervention. I am experienced in containerization using Docker and orchestration with
                Kubernetes for managing scalable, resilient microservices architectures. My DevOps capabilities extend
                to GitOps practices using ArgoCD and Infrastructure as Code implementation with Terraform for
                provisioning and managing AWS cloud resources including EC2, S3, IAM, VPC, EKS, and CloudWatch.
                I have practical knowledge of Linux system administration, shell scripting, version control using
                Git and GitHub, and networking fundamentals, allowing me to manage servers, troubleshoot deployment
                issues, and optimize system performance in cloud environments.
              </p>
            </div>

            {/* Second Paragraph */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                In addition to DevOps practices, I have a strong software development foundation with proficiency
                in C, Python, Java, and JavaScript. I specialize in building responsive, dynamic, and user-centric
                web interfaces using HTML, CSS, Bootstrap, and React, ensuring cross-browser compatibility and
                optimal user experience. On the backend, I work with Node.js and Express.js to develop RESTful APIs
                and integrate applications with databases such as MongoDB and SQL systems, supported by a solid
                understanding of DBMS concepts. I also have experience in data analysis and visualization using
                Power BI to transform raw data into meaningful insights for decision-making.
              </p>
            </div>

            {/* Third Paragraph */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I am committed to clean code principles, scalable system design, automation-driven workflows,
                and continuous integration and deployment practices. My approach focuses on improving system
                reliability, performance optimization, infrastructure efficiency, and seamless collaboration
                between development and operations teams. Passionate about continuous learning, problem-solving,
                and innovation, I strive to build secure, high-performance, and maintainable solutions that
                align with modern DevOps culture and cloud computing best practices.
              </p>
            </div>

            {/* Resume Button */}
            <div className="pt-6">
              <a
                href="https://drive.google.com/file/d/18LZHV11BtSvAqsRVqrkhV5YoETfygYRr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl"
              >
                <Download size={20} className="mr-2" />
                Download CV
              </a>
            </div>
          </div>

          {/* Stats Section - 1/3 width on large screens */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg sticky top-24">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white text-center">
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center group">
                  <h4 className="text-2xl md:text-3xl font-bold mb-1 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    10+
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Projects Completed
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center group">
                  <h4 className="text-2xl md:text-3xl font-bold mb-1 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    2+
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Years Experience
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center group">
                  <h4 className="text-2xl md:text-3xl font-bold mb-1 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    8+
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Technologies
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center group">
                  <h4 className="text-2xl md:text-3xl font-bold mb-1 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    20+
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Skills & Tools
                  </p>
                </div>
              </div>
              
              {/* Additional Info Card */}
              <div className="mt-6 p-4 bg-white dark:bg-gray-900 rounded-xl">
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Always learning, always building, always deploying."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
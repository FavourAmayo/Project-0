pipeline {
    agent any
	
    environment{
        JENKINS_NODE_COOKIE = 'dontkillmeplease'
        PORT=3000
    }
    stages {
        stage('Checking') { // for display purposes
            steps {
              // clean out the workspace
             echo "test"
            }
        }        
        /* stage('Download') {
           steps {
              // Download code from a GitHub repository
              // branch: the branch that you want to build
              // credentialsId: the ID of the credentials for your GitLab repo that is being managed by Jenkins
              // url: url to your repo
              git branch: 'master', credentialsId: '33d5fc51-fb1a-4210-b017-7e1dfb9fc358', url: 'https://github.com/FavourAmayo/Project-0-2.git'
           }
        } */
        stage('Install node modules'){
            steps{
                // install dependencies as described in the package.json
                sh 'npm install'
            }

        } 
        stage('Destroy Old Server') {
            steps {
                script {
                    try {
                        // kill any running instances of the app if applicable
                        sh 'kill $(lsof -t -i:$PORT)'
                    } catch (all) {
                        // if it fails that should mean a server wasn't already running
                        echo 'No server was already running'
                    }
                }
            }
        }
        stage('Start New Server!') {
            steps {
                script {
                    // start the application server
                    // the nohup means that we want to log the output to a file instead
                    sh 'nohup npm run dev &'
                }
            }
        } 
    }
}

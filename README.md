# test-app

## Descriptions

- **Dockerfile**
Based on the Dockerfile, GitHub actions are able to build and publish the container images to the Docker hub.

- **config.yaml**
File used by the automation as the parameter for the infrastructure.

- **chart folder**
The helm chart for installing this application contains the templates for:
- Deployment
- Ingress
- Namespace
- Service

## CI/CD Workflow

The workflow triggers on pushes to specific branches and performs the following actions:

- Builds and pushes Docker images for the application based on the pushed branch.
- The dev branch triggers a build and push for an image of the dev environment.
- The main branch triggers a build and push for prod and latest environment images.
- Deploys Infrastructure
After successfully building both images, the workflow deploys the infrastructure using Terragrunt.
Workflow Configuration

The workflow runs on pushes to the dev and main branches.

### Jobs

**build-and-push-dev** and **build-and-push-prod**

Steps:
1. Checkout Code.
2. Login to DockerHub.
3. Build and Push Docker Image (dev)
4. Push the image to DockerHub with the tags 
`bryan292/node-test-app-app:dev`.
Or
`bryan292/node-test-app-app:prod`
`bryan292/node-test-app-app:latest`

**deploy-infra**

This job is triggered if previous jobs (build-and-push-dev or build-and-push-prod) succeed.
Steps:
1. Checkout Code
2. Checkout Infra Repository
3. Install Terragrunt
4. Setup Terraform
5. Navigate to the env directory within the multi-cloud-k8s-iac repository.
6. Copies the config.yaml file
7. Runs Terragrunt to apply infrastructure using secrets stored in GitHub for AWS access and a variable AWS_DEFAULT_REGION.
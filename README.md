\# Abraham Cloud Guru â€” Cloud Engineer Portfolio



A personal portfolio website showcasing my cloud engineering skills, AWS projects, infrastructure automation and technical experience.



\*\*Live Website:\*\* \[https://abrahamcloudguru.com](https://abrahamcloudguru.com)

\*\*GitHub Repository:\*\* \[Femolala101/abraham-cloud-guru-portfolio](https://github.com/Femolala101/abraham-cloud-guru-portfolio)



\## Project Overview



This project demonstrates how to host a secure, static portfolio website on AWS using Infrastructure as Code (IaC). The website is stored in a private Amazon S3 bucket and delivered globally through Amazon CloudFront over HTTPS.



The project also includes a GitHub Actions deployment workflow using OpenID Connect (OIDC), allowing GitHub to request temporary AWS credentials without storing long-lived AWS access keys in the repository.



\## Architecture



```mermaid

flowchart TD

&#x20;   A\[Developer] --> B\[GitHub Repository]

&#x20;   B --> C\[GitHub Actions]

&#x20;   C --> D\[GitHub OIDC]

&#x20;   D --> E\[IAM Deployment Role]

&#x20;   E --> F\[Private Amazon S3 Bucket]

&#x20;   E --> G\[CloudFront Cache Invalidation]

&#x20;   H\[Website Visitor] --> I\[Route 53 DNS]

&#x20;   I --> J\[CloudFront Distribution]

&#x20;   J --> F

&#x20;   J --> K\[HTTPS via ACM Certificate]

```



\## AWS Services and Tools



| Technology | Purpose |

|---|---|

| Amazon S3 | Stores website files in a private bucket |

| Amazon CloudFront | Delivers website content globally |

| AWS Certificate Manager (ACM) | Provides the TLS certificate for HTTPS |

| Amazon Route 53 | Manages the custom domain and DNS records |

| AWS IAM | Controls access to AWS resources |

| GitHub Actions | Automates website deployment |

| GitHub OIDC | Enables temporary AWS authentication without long-lived access keys |

| Terraform | Defines and manages AWS infrastructure |

| HTML, CSS and JavaScript | Builds the static portfolio website |



\## Repository Structure



```text

abraham-cloud-guru-portfolio/

â”œâ”€â”€ .github/

â”‚   â””â”€â”€ workflows/

â”‚       â””â”€â”€ deploy.yml

â”œâ”€â”€ docs/

â”œâ”€â”€ infrastructure/

â”‚   â”œâ”€â”€ main.tf

â”‚   â”œâ”€â”€ variables.tf

â”‚   â”œâ”€â”€ outputs.tf

â”‚   â””â”€â”€ ...

â”œâ”€â”€ website/

â”‚   â”œâ”€â”€ index.html

â”‚   â”œâ”€â”€ 404.html

â”‚   â”œâ”€â”€ css/

â”‚   â”œâ”€â”€ js/

â”‚   â””â”€â”€ assets/

â”‚       â”œâ”€â”€ images/

â”‚       â””â”€â”€ cv.pdf

â”œâ”€â”€ .gitignore

â””â”€â”€ README.md

```



\*The structure above describes the intended layout; filenames may vary depending on the infrastructure configuration.\*



\## Security Measures



\- Keep the website's S3 bucket private.

\- Enable S3 Block Public Access and default server-side encryption.

\- Use CloudFront Origin Access Control (OAC) to access the private S3 origin.

\- Redirect HTTP traffic to HTTPS.

\- Use IAM roles and least-privilege permissions for automated deployments.

\- Use GitHub OIDC rather than storing long-lived AWS access keys in GitHub.

\- Exclude Terraform state files, local credentials, private keys and sensitive environment files from Git.

\- Monitor AWS spending to avoid unexpected charges.



\## CI/CD Deployment



The intended deployment workflow is defined in `.github/workflows/deploy.yml`.



When code is pushed to the `main` branch, the workflow is designed to:



1\. Check out the repository.

2\. Authenticate to AWS through GitHub OIDC.

3\. Upload the contents of `website/` to the private S3 bucket.

4\. Remove outdated website files using `aws s3 sync --delete`.

5\. Create a CloudFront invalidation so visitors receive updated content.



The deployment is considered complete once the workflow succeeds and the updated website is verified in a browser.



\## Deployment Prerequisites



\- An AWS account with appropriate permissions.

\- AWS CLI and Terraform installed locally for infrastructure management.

\- A GitHub account and repository.

\- A registered domain and configured DNS.

\- An S3 bucket and CloudFront distribution.

\- An ACM certificate configured for the custom domain in `us-east-1` when used with CloudFront.

\- A GitHub OIDC provider and restricted IAM deployment role.



\## Deploying the Website



After the AWS resources and GitHub OIDC role have been configured, push website changes to the `main` branch:



```powershell

git add .

git commit -m "Update portfolio website"

git push origin main

```



GitHub Actions should then run the deployment workflow automatically.



For a manual upload, after verifying the target bucket, use:



```powershell

aws s3 sync website/ s3://abrahamcloudguru-com-dev-portfolio --delete

```



A manual upload does not automatically invalidate CloudFront; create an invalidation if required.



\## Cost Considerations



AWS charges may apply for CloudFront data transfer and requests, Route 53 hosted zones and domain registration, S3 storage and requests, and any additional monitoring or security services enabled.



Actual costs depend on traffic, region, configuration and current AWS pricing. Use the AWS Pricing Calculator and configure a budget alert before expanding the infrastructure.



\## Testing and Validation



Before considering the project complete, verify:



\- \[ ] The custom domain loads successfully over HTTPS.

\- \[ ] HTTP redirects to HTTPS.

\- \[ ] Direct public access to S3 objects is denied.

\- \[ ] The CV downloads correctly.

\- \[ ] The custom 404 page works.

\- \[ ] GitHub Actions can assume the deployment role through OIDC.

\- \[ ] A successful workflow updates the live website.

\- \[ ] No AWS credentials or Terraform state files are committed.



\## Screenshots



Add screenshots here as the project progresses:



\- Live portfolio website

\- AWS architecture and CloudFront distribution

\- Successful GitHub Actions deployment

\- CloudWatch dashboard, if configured

\- WAF blocking test, if WAF is configured and tested



\## Future Improvements



\- Complete and verify the GitHub Actions deployment pipeline.

\- Add automated infrastructure validation on pull requests.

\- Configure security headers and evaluate AWS WAF.

\- Add CloudWatch monitoring and alerting.

\- Document disaster recovery and cost optimisation.



\## Author



\*\*Abraham Adebanjo\*\*

Cloud Engineer | AWS | Terraform | DevOps



\- Portfolio: \[abrahamcloudguru.com](https://abrahamcloudguru.com)

\- GitHub: \[Femolala101](https://github.com/Femolala101)

\- LinkedIn: \[Abraham Adebanjo](https://www.linkedin.com/)

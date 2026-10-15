
terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

provider "aws" {
  region = "eu-west-2"

  default_tags {
    tags = {
      Project     = "portfolio"
      Environment = var.environment
    }
  }
}



# ACM certificates attached to CloudFront must be in us-east-1.
provider "aws" {
  alias  = "use1"
  region = "us-east-1"
}

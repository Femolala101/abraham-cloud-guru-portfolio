
output "bucket_name" {
  description = "Name of the private portfolio S3 bucket"
  value       = aws_s3_bucket.portfolio.bucket
}


output "cloudfront_distribution_id" {
  description = "ID of the CloudFront distribution"
  value       = aws_cloudfront_distribution.portfolio.id
}

output "cloudfront_domain_name" {
  description = "Public CloudFront domain name"
  value       = aws_cloudfront_distribution.portfolio.domain_name
}

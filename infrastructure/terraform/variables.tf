variable "aws_region" {
  description = "AWS region for primary resources"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "production"
}

variable "domain_name" {
  description = "Primary domain name"
  type        = string
  default     = "decoriyans.com"
}

variable "www_domain" {
  description = "WWW subdomain"
  type        = string
  default     = "www.decoriyans.com"
}

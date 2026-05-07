data "aws_availability_zones" "available" {
  state = "available"
}
data "aws_acm_certificate" "ssl_cert" {
  domain      = var.domain
  statuses    = ["ISSUED"]
  most_recent = true
}
data "aws_route53_zone" "selected" {
  name         = var.domain
  private_zone = false
}

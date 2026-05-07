variable "project_name" {
  default = "ecs-node"
}
variable "project_environment" {
  default = "production"
}
variable "vpc_cidr_block" {
  default = "10.1.0.0/24"
}
variable "container_image" {
  description = "Docker Hub image"
  default     = "133954050484.dkr.ecr.ap-southeast-2.amazonaws.com/ecs-project/ecs-git:64f696e"
}
variable "domain" {
  description = "Domain name used to look up the Route53 hosted zone."
  type        = string
  default = "kunchirakkattu.com"
}

variable "record" {
  description = "Record name to be created inside the hosted zone."
  type        = string
  default = "app"
}

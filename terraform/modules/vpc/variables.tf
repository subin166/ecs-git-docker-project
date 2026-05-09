variable "project_name" {}
variable "environment" {}
variable "vpc_cidr_block" {}

variable "azs" {
  type = list(string)
}

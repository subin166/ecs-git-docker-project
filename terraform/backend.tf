terraform {
  backend "s3" {
  bucket  = "321statefile"
  key     = "terraform.tfstate"
  region  = "ap-southeast-2"
  encrypt = true
}
}


export interface UserMocksTypes {
  user_id: string
  user_name: string
  user_email: string
  user_photo: string
  companies: Company[]
}

export interface Company {
  company_id: string
  company_name: string
  company_logo: string
  company_products: CompanyProduct[]
}

export interface CompanyProduct {
  product_id: string
  product_name: string
  product_logo: string
  projects: Project[]
}

export interface Project {
  project_id: any
  project_name: string
  status: Status[]
  working_users: WorkingUser[]
  features?: Feature[]
}

export interface Status {
  status_name: string
  value: number
}

export interface WorkingUser {
  user_id: string
  user_name: string
  user_email: string
  user_photo: string
}

export interface Feature {
  feature_id: string
  feature_name: string
  deliveries: Delivery[]
}

export interface Delivery {
  delivery_id: string
  delivery_name: string
}
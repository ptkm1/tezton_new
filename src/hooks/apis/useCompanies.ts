import { Api } from '../../services/axios'

export default function useCompanies() {

  const GetCompaniesOfUser = async (id_user: any) => {
    try {
      const { data } = await Api.get(`/company/list/users/${id_user}`)
      return data
    } catch (error: any) {
      console.error(error.response.data.message);
    }
  }

  const GetCompany = async (company_id: string) => {
    try {
      const { data } = await Api.get(`company/list/${company_id}`)
      return data
    } catch (error: any) {
      console.error(error.response.data.message);
    }
  }

  const CreateCompany = async (payload: any) => {

    try {
      const { data } = await Api.post(`/company/search/by-name`, payload)
      return data
    } catch (error: any) {
      console.log(error.response.data.message)
    }
  }

  const RemoveCompany = async (company_id: string) => {
    try {
      const { data } = await Api.delete(`/company/remove/${company_id}`);
      return data
    } catch (error) {
      console.log(error);
    }
  }
  
  const UpdateCompany = async (company_id: string, payload: any) => {
    try {
      const { data } = await Api.put(`/company/update/${company_id}`, payload);
      return data
    } catch (error) {
      console.log(error);
    }
  }

  return {
    GetCompaniesOfUser,
    GetCompany,
    CreateCompany,
    RemoveCompany,
    UpdateCompany
  }
}

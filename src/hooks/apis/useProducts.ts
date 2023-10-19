import { Api } from "../../services/axios";

export default function useProducts() {
  const GetProductsOfCompany = async (company_id: string) => {
    try {
      const { data } = await Api.get(`product/company/${company_id}`);
      return data;
    } catch (error: any) {
      console.error(error.response.data.message);
    }
  };

  const CreateNewProduct = async (payload: any) => {
    try {
      const { data } = await Api.post(`/product/create`, payload);
      return data;
    } catch (error: any) {
      console.error(error.response.data.message);
    }
  };

  const RemoveProduct = async (idOfProduct: any) => {
    try {
      const { data } = await Api.delete(`/product/remove/${idOfProduct}`);
      return data.data;
    } catch (error: any) {
      console.error(error.response.data.message);
    }
  };

  const UpdateProduct = async (idOfProduct: any, payload: any) => {
    try {
      const { data } = await Api.put(`/product/update/${idOfProduct}`, payload);
      return data.data;
    } catch (error: any) {
      console.error(error.response.data.message);
    }
  };

  return {
    GetProductsOfCompany,
    CreateNewProduct,
    RemoveProduct,
    UpdateProduct,
  };
}

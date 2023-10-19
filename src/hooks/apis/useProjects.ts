import { Api } from "../../services/axios";

export default function useProjects() {
  const GetProjectsOfProduct = async (product_id: string) => {
    try {
      const { data } = await Api.get(`projects/products/list/${product_id}`);
      return data;
    } catch (error: any) {
      console.error(error.response.data.message);
    }
  };

  const CreateProject = async (payload: any) => {
    try {
      const { data } = await Api.post(`/projects/create`, payload);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const RemoveProject = async (project_id: string) => {
    try {
      const { data } = await Api.delete(`/projects/remove/${project_id}`);
      return data.data;
    } catch (error: any) {
      console.error(error.response.data.message);
    }
  };

  const UpdateProject = async (project_id: string, payload: any) => {
    try {
      const { data } = await Api.put(`/projects/update/${project_id}`, payload);
      return data;
    } catch (error: any) {
      console.error(error.response.data.message);
    }
  };

  return {
    GetProjectsOfProduct,
    RemoveProject,
    CreateProject,
    UpdateProject,
  };
}

import { Api } from "../../services/axios";

export default function useLineOfBusiness() {
  const GetLinesOfBusinessOfProject = async (project_id: string) => {
    try {
      const { data } = await Api.get(`listOfBusiness/show/${project_id}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  // const GetLineOfBusiness = async (lob_id: string) => {
  //   try {
  //     const { data } = await Api.get(`listOfBusiness/show/${lob_id}`); // URL errada, pedir ao thiago um endpoint que pegue um currentLineOfBusiness
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const RemoveLineOfBusiness = async (lob_id: string) => {
    try {
      const { data } = await Api.delete(`/listOfBusiness/remove/${lob_id}`);
      return data.data;
    } catch (error) {
      console.error(error);
    }
  };

  const CreateNewLineOfBusiness = async (payload: any) => {
    try {
      const { data }: { data: any; message: string } = await Api.post(
        `/listOfBusiness/create`,
        payload
      );
      return data.data;
    } catch (error) {
      console.error(error);
    }
  };

  const UpdateLineOfBusiness = async (lob_id: string, payload: any) => {
    try {
      const { data }: { data: any; message: string } = await Api.put(
        `/listOfBusiness/update/${lob_id}`,
        payload
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    GetLinesOfBusinessOfProject,
    RemoveLineOfBusiness,
    CreateNewLineOfBusiness,
    UpdateLineOfBusiness,
  };
}

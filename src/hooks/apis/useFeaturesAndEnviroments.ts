import { Api } from "../../services/axios";

export default function useFeaturesAndEnviroments() {
  const GetFeaturesAndEnviromentsOfLOB = async (
    id_line_of_business: string
  ) => {
    try {
      const { data } = await Api.get(`environment/${id_line_of_business}`);
      return data;
    } catch (error: any) {
      console.error(error.response.data.message);
    }
  };

  const RemoveFeature = async (id_of_feature: string) => {
    try {
      const { data } = await Api.delete(`/environment/${id_of_feature}`);
      return data.data;
    } catch (error: any) {
      console.error(error.response.data.message);
    }
  };

  const CreateNewFeature = async (payload: any) => {
    try {
      const { data } = await Api.post(`/environment/create`, payload);
      console.log(data, "<data></data>");
      return data.data;
    } catch (error: any) {
      console.error(error.response.data.message);
    }
  };

  const CreateNewAmbient = async ({ feature_id, payload }: any) => {
    try {
      const { data } = await Api.post(
        `/environment/feature/create-ambients/${feature_id}`,
        payload
      );

      return data;
    } catch (error: any) {
      console.error(error.response.data.message);
    }
  };

  return {
    GetFeaturesAndEnviromentsOfLOB,
    RemoveFeature,
    CreateNewFeature,
    CreateNewAmbient,
  };
}

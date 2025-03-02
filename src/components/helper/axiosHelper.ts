import axios from "axios";
import { User, UserApiResponse } from "../../pages/types";

const apiURL = import.meta.env.VITE_API_URL;

const userAPI = apiURL + "/user";

//register user

export const postUser = async (userObj: User): Promise<UserApiResponse> => {
  try {
    const { data } = await axios.post<UserApiResponse>(userAPI, userObj);
    return data;
  } catch (error: any) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

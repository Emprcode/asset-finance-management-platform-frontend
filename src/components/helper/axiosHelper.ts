import axios from "axios";
import { ApplicationFormData, User, UserApiResponse } from "../../pages/types";

const apiURL = import.meta.env.VITE_API_URL;

const userAPI = apiURL + "/user";

const applicationAPI = apiURL + "/application";

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

//register user

export const loginUser = async (userObj: User): Promise<UserApiResponse> => {
  try {
    const { data } = await axios.post<UserApiResponse>(userAPI + "/login", userObj);
    return data;
  } catch (error: any) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//applications

//return user Id
const getUserId = () => {
  const userStr = sessionStorage.getItem("user");
  const userObj = userStr ? JSON.parse(userStr) : null;
  return userObj?._id || null;
};
//add application
export const postApplication = async (transObj: ApplicationFormData): Promise<UserApiResponse> => {
  try {
    const userId = getUserId();
    if (!userId) {
      return {
        status: "error",
        message: "You need to log in first!",
      };
    }

    const { data } = await axios.post<UserApiResponse>(applicationAPI, transObj, {
      headers: {
        Authorization: userId,
      },
    });
    console.log(data);
    return data;
  } catch (error: any) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//get Transaction
export const getApplications = async () => {
  try {
    const userId = getUserId();
    // console.log(userId);
    if (!userId) {
      return {
        status: "error",
        message: "You need to log in first!",
      };
    }

    const { data } = await axios.get(applicationAPI, {
      headers: {
        Authorization: userId,
      },
    });
    // console.log(data);
    return data;
  } catch (error: any) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

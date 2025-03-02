import axios from "axios";
import { ApplicationFormData, User, ApiResponse } from "../../types";

const apiURL = import.meta.env.VITE_API_URL;

const userAPI = apiURL + "/user";

const applicationAPI = apiURL + "/application";

//register user

export const postUser = async (userObj: User): Promise<ApiResponse> => {
  try {
    const { data } = await axios.post<ApiResponse>(userAPI, userObj);
    return data;
  } catch (error: any) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//register user

export const loginUser = async (userObj: User): Promise<ApiResponse> => {
  try {
    const { data } = await axios.post<ApiResponse>(userAPI + "/login", userObj);
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
export const postApplication = async (
  applicationObj: ApplicationFormData
): Promise<ApiResponse> => {
  try {
    const userId = getUserId();
    if (!userId) {
      return {
        status: "error",
        message: "You need to log in first!",
      };
    }

    const { data } = await axios.post<ApiResponse>(applicationAPI, applicationObj, {
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

//update application
export const updateApplication = async (updateObj: ApplicationFormData): Promise<ApiResponse> => {
  try {
    const userId = getUserId();
    if (!userId) {
      return {
        status: "error",
        message: "You need to log in first!",
      };
    }

    const { data } = await axios.put<ApiResponse>(applicationAPI, updateObj, {
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

export const deleteApplication = async (_id: string) => {
  try {
    const userId = getUserId();
    if (!userId) {
      return {
        status: "error",
        message: "You need to log in first!",
      };
    }
    console.log(_id);
    const { data } = await axios.delete(applicationAPI, {
      data: { _id },
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

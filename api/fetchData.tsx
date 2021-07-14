import axios from "axios";

export const getDataFromApi = async () => {
  try {
    let response = await axios.get(
      "https://60ec77fea78dc700178adb5a.mockapi.io/api/v1/disks",
    );
    let json = await response.data;
    return json;
  } catch (error) {
    console.error(error);
  }
};

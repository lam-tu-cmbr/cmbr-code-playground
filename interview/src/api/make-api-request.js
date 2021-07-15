import axios from "axios";
import { stringify } from "qs";

export const ROOT_URL = 'https://60ec77fea78dc700178adb5a.mockapi.io/api/';
export const CONTENT_TYPE_HEADER = { 'Content-Type': 'application/json' };

export const makeApiRequest = ({
  data = {},
  method = 'get',
  params = null,
  url: passedUrl = '',
  version = 1,
  handleError = null,
}) => {
  const axiosInstance = axios.create();
  const queryString = stringify(params, { addQueryPrefix: true });
  const url = `${ROOT_URL}v${version}/${passedUrl}${queryString}`;

  const headers = { ...CONTENT_TYPE_HEADER };

  let request = axiosInstance({ data, headers, method, url }).then(response => {
    if (response === undefined || response.data === undefined) {
      return null;
    }

    return response.data;
  });

  if (handleError !== null) {
    request.catch(handleError);
  }

  return request;
}
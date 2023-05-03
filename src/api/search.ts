import { client } from './client';
import axios from 'axios';

const DEFAULT_ERROR_MESSAGE = 'Error: Network Error';

export const searchKeyword = async (keyword: string) => {
  try {
    const { data } = await client.get(`/api/v1/search-conditions/?name=${keyword}`);

    return data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const data = e.response?.data;

      const errorMessage = data.error || DEFAULT_ERROR_MESSAGE;
      throw new Error(errorMessage);
    }
  }
};

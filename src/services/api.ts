import axios from 'axios';
import { ApiResponse } from '../types';
import { API_BASE_URL } from '../constants';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getCourses = async (page: number, limit: number, filter: string): Promise<ApiResponse> => {
  const response = await api.get<ApiResponse>('/courses', {
    params: { page, limit, filter },
  });
  return response.data;
};

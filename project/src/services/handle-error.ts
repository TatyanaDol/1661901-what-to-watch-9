import request from 'axios';
import {toast} from 'react-toastify';
import {ErrorType} from '../types/error';
import {HttpCode} from '../const';

export const handleError = (error: ErrorType): void => {

  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HttpCode.Bad_request:
        toast.info(response.data.error);
        break;
      case HttpCode.Unauthorized:
        toast.info(response.data.error);
        break;
      case HttpCode.Not_found:
        toast.info(response.data.error);
        break;
    }
  }
  else {
    toast.error('Something went wrong. Please try again');
  }
};

import { useNavigate } from 'react-router-dom';

const DEFAULT_MSG = '알 수 없는 오류가 발생했습니다!';

function useAxios(api) {
  const navigate = useNavigate();

  const request = async (params = [], config = {}) => {
    const { onSuccess, onError } = config;
    const { result = {}, errorMsg = {}, redirect = {} } = await api(...params);
    const { response = {}, isSuccess } = result;
    const { data, status } = response;
    console.log(result);

    if (isSuccess) {
      await onSuccess?.(data);
      return;
    }

    if (onError) {
      await onError({ result, errorMsg, redirect });
      return;
    }

    const alertMsg = errorMsg[status] || errorMsg.default || DEFAULT_MSG;
    const redirectRoute = redirect[status];

    if (alertMsg) {
      alert(alertMsg);
    }

    if (redirectRoute) {
      navigate(redirectRoute);
    }
  };

  return request;
}

export default useAxios;

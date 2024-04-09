import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { InputProps } from 'antd';
import { AxiosError, isAxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import { LoginDatas, loginRequest } from '../../../services/auth/authService'

interface LoginFormInputs {
  username: InputProps;
  password: InputProps;
}

export default function useLoginForm() {
  const { t } = useTranslation()
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    setError,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const { mutate: login, isLoading } = useMutation(loginRequest, {
    onSuccess() {
      const urlSearchParams = new URLSearchParams(window.location.search);
      navigate(urlSearchParams.get('callback') || '/');
    },
    onError(e: AxiosError | Error | unknown) {
      if (isAxiosError(e)) {
        setError('username', {
          message: e?.response?.data?.msg || t('ERROR.UNKNOWN'),
        });
      } else if (e instanceof Error) {
        setError('username', {
          message: e.message || t('ERROR.UNKNOWN'),
        });
      } else {
        setError('username', {
          message: t('ERROR.UNKNOWN'),
        });
      }
    },
  });

  const onSubmit = useMemo(
    () =>
      handleSubmit((data: LoginDatas) => {
        console.log("dad", data)
        login(data);
      }),
    [handleSubmit, login]
  );

  const inputs: LoginFormInputs = {
    username: {
      ...register('username', {
        required: t('Field is required'),
        // pattern: { value: /^\S+@\S+$/i, message: t('COMMON.INVALID_EMAIL') },
      }),
      type: 'text',
      // size: 'small',
      // error: !!errors.username,
      // helperText: errors.email?.message,
      // fullWidth: true,
      // label: translate('COMMON.EMAIL'),
      placeholder: t('Username'),
    },
    password: {
      ...register('password', { required: t('Field is required') }),
      // size: 'small',
      // error: !!errors.password,
      // helperText: errors.password?.message,
      // fullWidth: true,
      type: 'password',
      // label: translate('COMMON.PASSWORD'),
      placeholder: t('Password'),
    },
  };

  return {
    isLoading,
    inputs,
    onSubmit,
  };
}

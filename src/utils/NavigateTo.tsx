import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  path: string;
};

export const NavigateTo = ({ path }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(path);
  }, []);

  return null;
};

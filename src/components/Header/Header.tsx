import { useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

type HeaderLabelProps = {
  selected?: boolean;
};

export const HeaderLabel = styled.label<HeaderLabelProps>`
  position: relative;
  cursor: pointer;
  font-weight: ${({ selected }) => selected && 'bold'};

  ::before {
    ${({ selected }) =>
      selected &&
      css`
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100px;
        height: 3px;
        background-color: #ffff;
      `}
  }
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ffff;
  padding: 24px 48px;
  margin-bottom: 40px;
  align-items: center;

  @media (max-width: 500px) {
    padding: 24px 32px;

    ${HeaderLabel} {
      margin-left: 12px;
    }
  }
`;

const headerItems = [
  { id: 'my-profile', label: 'Meu Perfil' },
  { id: 'my-projects', label: 'Meus projetos' },
  { id: 'contact-me', label: 'Contato' },
];

export const Header = () => {
  const { pathname } = useLocation();
  const [selectedItem, setSelectedItem] = useState(pathname.replace('/', ''));
  const navigate = useNavigate();

  console.log(pathname);

  return (
    <HeaderWrapper>
      {headerItems.map((label) => (
        <HeaderLabel
          onClick={() => {
            setSelectedItem(label.id);
            navigate(label.id);
          }}
          selected={label.id === selectedItem}
          key={label.id}
        >
          {label.label}
        </HeaderLabel>
      ))}
    </HeaderWrapper>
  );
};

import { useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
        bottom: -10px;
        left: 0;
        width: 100%;
        height: 2px;
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

type HeaderLabelProps = {
  selected?: boolean;
};

const headerItems = [
  { id: 'my-profile', label: 'Meu Perfil' },
  { id: 'my-projects', label: 'Meus projetos' },
  { id: 'contact-me', label: 'Contato' },
];

export const Header = () => {
  const [selectedItem, setSelectedItem] = useState('my-profile');
  const navigate = useNavigate();
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

import { useState } from 'react';
import { styled } from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ffff;
  padding: 24px;
  margin-bottom: 40px;
`;

type HeaderLabelProps = {
  selected?: boolean;
};

export const HeaderLabel = styled.label<HeaderLabelProps>`
  position: relative;
  cursor: pointer;
  font-weight: ${({ selected }) => selected && 'bold'};

  ::before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ffff;
  }
`;

const headerItems = [
  { id: 'my-profile', label: 'Meu Perfil' },
  { id: 'my-projects', label: 'Meus projetos' },
  { id: 'contact-me', label: 'Contato' },
];

export const Header = () => {
  const [selectedItem, setSelectedItem] = useState('my-profile');
  return (
    <HeaderWrapper>
      {headerItems.map((label) => (
        <HeaderLabel
          onClick={() => setSelectedItem(label.id)}
          selected={label.id === selectedItem}
          key={label.id}
        >
          {label.label}
        </HeaderLabel>
      ))}
    </HeaderWrapper>
  );
};

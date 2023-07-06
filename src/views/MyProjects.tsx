import { ProjectCard } from '../components/Card/Card';
import { styled } from 'styled-components';

const projects = [
  {
    cardDescription:
      'Developed using React, Javascript, and styled-components. This is an application that consumes a Star Wars API and lists all the planets from the franchise, along with their populations, areas, and other details. For better visualization, there are selectable filters available to provide more detailed information.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png',
    imageTitle: 'Star Wars',
    link: 'https://github.com/moraesvictor/Project-star-wars',
  },
  {
    cardDescription:
      'Developed using React, TypeScript, and styled-components, this application consumes a fruit listing API, providing comprehensive details about various fruits. Users can explore a wide range of information, including nutritional values and discover delicious dishes that can be prepared using these fruits.',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg?crop=0.982xw:0.736xh;0,0.189xh&resize=1200:*',
    imageTitle: 'Fruit list',
    link: 'https://github.com/moraesvictor/desafio-fruit-calories',
  },
  {
    cardDescription:
      'This project is a GraphQL API built with Apollo Server that utilizes a fake API to provide data. The server is designed to provide high performance and scalability, with technologies such as DataSource used to avoid common performance problems like n+1 queries. By using GraphQL, the API offers a flexible and intuitive way for clients to query data',
    image: 'https://www.apollographql.com/apollo-home.jpg',
    imageTitle: 'Apollo GraphQL',
    link: 'https://github.com/moraesvictor/apollo-server',
  },
];

const Wrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const MyProjects = () => {
  return (
    <Wrapper>
      {projects.map((item, index) => (
        <ProjectCard
          key={index}
          link={item.link}
          cardDescription={item.cardDescription}
          image={item.image}
          imageTitle={item.imageTitle}
        />
      ))}
    </Wrapper>
  );
};

import { gql } from 'apollo-server-express';

const schemas = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

export default schemas;

import { resolvers } from './resolvers'
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `

  type Query {
    hello: String
    greet(name: String): String
    tasks: [ Task ]
    users(params: GetParamsInput): [ User ]
  }

  type Task {
    _id: ID
    title: String
    description: String
    number: Int
  }

  type User {
    _id: ID
    firstname: String!
    lastname: String!
    age: Int
  }

  type Mutation {
    createTask(input: inputTask) : Task
    createUser(input: UserInput): User
    updateUser(_id: ID, input: UserInput): User
    deleteUser(_id: ID): User
  }

  input inputTask {
    title: String!
    description: String!
    number: Int
  }

  input UserInput {
    firstname: String!
    lastname: String
    age: Int
  }

  input GetParamsInput {
    outset: Int
    limit: Int
  }
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers
});
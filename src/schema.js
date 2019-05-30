// const { buildSchema } = require('graphql');
import { buildSchema } from 'graphql';

export default buildSchema(`
    type Task {
        id: ID,
        title: String
    }

    type Query {
        tasks: [Task]
    }

    type Mutation {
        createTask(title: String): Task
    }
`);

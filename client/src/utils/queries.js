import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  mutation me {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
  mutation user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;


export const QUERY_CHECKOUT = gql`
  mutation getCheckout($donation: ID!) {
    checkout(donation: $donation) {
      session
    }
  }

`;
export const QUERY_GET_ALL_JOBS = gql`
  mutation getAllJobs {
    getAllJobs {
      id
      title
      company
      description
      salary
    }
  }
`;

export const QUERY_GET_DEVELOPER_BY_ID = gql`
  mutation getDeveloperById($id: ID!) {
    getDeveloperById(id: $id) {
      id
      githubUrl
    }
  }
`;

export const QUERY_GET_RECRUITER_BY_ID = gql`
  mutation getRecruiterById($id: ID!) {
    getRecruiterById(id: $id) {
      id
      company
    }
  }
`;

export const QUERY_GET_JOB_BY_ID = gql`
  mutation getJobById($id: ID!) {
    getJobById(id: $id) {
      id
      title
      company
      description
      salary
    }
  }
`;

export const QUERY_JOBS = gql`
  mutation jobs($title: String!) {
    jobs(title: $title) {
      id
      title
      company
      description
      salary
    }
  }
`;

export const QUERY_RECRUITERS = gql`
  mutation recruiters($firstName: String!, $lastName: String!, $company: String!) {
    recruiters(firstName: $firstName, lastName: $lastName, company: $company) {
      id
      firstName
      lastName
      company
    }
  }
`;

export const QUERY_DEVELOPERS = gql`
  mutation developers($firstName: String!, $lastName: String!, $company: String!) {
    developers(firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;
export const CREATE_DEVELOPER = gql`
  mutation createDeveloper($githubUrl: String!) {
    createDeveloper(githubUrl: $githubUrl) {
      id
      githubUrl
    }
  }
`;

export const CREATE_RECRUITER = gql`
  mutation createRecruiter($company: String!) {
    createRecruiter(company: $company) {
      id
      company
    }
  }
`;

export const CREATE_JOB = gql`
  mutation createJob($title: String!, $description: String!, $salary: Float!) {
    createJob(title: $title, description: $description, salary: $salary) {
      id
      title
      description
      salary
    }
  }
`;

export const DELETE_JOB = gql`
  mutation deleteJob($jobId: ID!) {
    deleteJob(jobId: $jobId) {
      id
      title
      description
      salary
    }
  }
`;

export const UPDATE_JOB_BY_ID = gql`
  mutation updateJobById($jobId: ID!, $title: String!, $description: String!, $salary: Float!) {
    updateJobById(jobId: $jobId, title: $title, description: $description, salary: $salary) {
      id
      title
      description
      salary
    }
  }
`;

export const UPDATE_RECRUITER = gql`
  mutation updateRecruiter($recruiterId: ID!, $company: String!) {
    updateRecruiter(recruiterId: $recruiterId, company: $company) {
      id
      company
    }
  }
`;

export const UPDATE_DEVELOPER = gql`
  mutation updateDeveloper($developerId: ID!, $githubUrl: String!) {
    updateDeveloper(developerId: $developerId, githubUrl: $githubUrl) {
      id
      githubUrl
    }
  }
`;

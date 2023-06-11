import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($donation: ID!) {
    checkout(donation: $donation) {
      session
    }
  }
`;

export const QUERY_GET_ALL_JOBS = gql`
  query getAllJobs {
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
  query getDeveloperById($id: ID!) {
    getDeveloperById(id: $id) {
      id
      githubUrl
    }
  }
`;

export const QUERY_GET_RECRUITER_BY_ID = gql`
  query getRecruiterById($id: ID!) {
    getRecruiterById(id: $id) {
      id
      company
    }
  }
`;

export const QUERY_GET_JOB_BY_ID = gql`
  query getJobById($id: ID!) {
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
  query jobs($title: String!) {
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
  query recruiters($firstName: String!, $lastName: String!, $company: String!) {
    recruiters(firstName: $firstName, lastName: $lastName, company: $company) {
      id
      firstName
      lastName
      company
    }
  }
`;

export const QUERY_DEVELOPERS = gql`
  query developers($firstName: String!, $lastName: String!, $company: String!) {
    developers(firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;


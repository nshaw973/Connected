import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String! $username: String!, $email: String!, $password: String!, $recruiter: Boolean!) {
    addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password, recruiter: $recruiter) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_CHECKOUT_SESSION = gql`
  mutation CreateCheckoutSession($amount: Int!) {
    createCheckoutSession(amount: $amount)
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

  mutation createJob($title: String!, $company: company, $description: String!, $salary: Float!) {

    createJob(title: $title, company: $company, description: $description, salary: $salary) {
      id
      title
      company
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
      company
      description
      salary
    }
  }
`;

export const UPDATE_JOB_BY_ID = gql`

  mutation updateJobById($jobId: ID!, $title: String!, $company: company, $description: String!, $salary: Float!) {

    updateJobById(jobId: $jobId, title: $title, company: $company, description: $description, salary: $salary) {
      id
      title
      company
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
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
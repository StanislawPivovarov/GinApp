import { gql } from "@apollo/client";

export const CATEGORIES = gql`
  query {
    category(order_by: { id: desc }) {
      name
      image
      id
      description
    }
  }
`;

export const ACCESSORIES = gql`
  query {
    accessories(order_by: { id: desc }) {
      category
      description
      id
      image
      name
      price
    }
  }
`;

export const BEANS = gql`
  query {
    beans(order_by: { id: desc }) {
      category
      description
      id
      image
      name
      price
    }
  }
`;

export const BUNDLES = gql`
  query {
    bundles(order_by: { id: desc }) {
      price
      name
      image
      id
      description
      category
    }
  }
`;

export const COFFEE = gql`
  query {
    coffee(order_by: { id: desc }) {
      price
      name
      image
      id
      description
      category
    }
  }
`;

export const DESERTS = gql`
  query {
    deserts(order_by: { id: desc }) {
      price
      name
      image
      id
      description
      category
    }
  }
`;

export const LEAF_TEA = gql`
  query {
    leaf_tea(order_by: { id: desc }) {
      price
      name
      image
      id
      description
      category
    }
  }
`;

export const TEA = gql`
  query {
    tea(order_by: { id: desc }) {
      category
      description
      id
      image
      name
      price
    }
  }
`;

export const BLOGS = gql`
  query {
    blog(order_by: { id: desc }, limit: 6) {
      name
      image
      id
      filling
      created
    }
  }
`;

export const CAROUSEL = gql`
  query {
    carousel(limit: 5, order_by: { id: desc }) {
      id
      image
    }
  }
`;

export const BANNER = gql`
query {
  carousel(where: {carouselCategory: {id: {_eq: 3}}}) {
    id
    image
    carouselCategory {
      id
    }
  }
}
`
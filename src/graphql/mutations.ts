import { gql } from "@apollo/client";

export const ADD_TO_CART = gql`
mutation ($tocart: preorderItems_insert_input!) {
    insert_preorderItems(objects: [$tocart]) {
      returning {
        id
        preorder_id
        product_id
      }
    }
  }
  
`
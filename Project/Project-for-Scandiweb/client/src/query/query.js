import {gql} from '@apollo/client'

export const GET_ALL_CURRENCIES = gql`
  query{
    currencies{
      label, symbol
    }
  }
`

export const GET_ALL_CATEGORIES = gql`
query{
    categories {
      name  
    }
  }
`;

export const GET_ONE_CATEGORY = gql`
query Category($input: CategoryInput) {
  category(input: $input) {
    name, products {
      id, 
      name, 
      inStock,
      gallery,
			description,
      prices {
        currency {
          label, symbol
        },
      amount
      }
    }
  }
}
`
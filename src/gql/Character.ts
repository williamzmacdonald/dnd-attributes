import { gql } from "@apollo/client";

export const CHARACTER = gql`
    query Character($id: String!) {
        character(id: $id) {
            id
            name
            attributes {
                strength
                dexterity
                constitution
                wisdom
                intelligence
                charisma
            }
        }
    }
`;

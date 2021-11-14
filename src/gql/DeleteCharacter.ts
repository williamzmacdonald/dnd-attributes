import { gql } from "@apollo/client";

export const DELETE_CHARACTER = gql`
    mutation DeleteCharacter($id: String!) {
        deleteCharacter(id: $id) {
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

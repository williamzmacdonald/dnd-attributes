import { gql } from "@apollo/client";

export const CHARACTERS = gql`
    query Characters {
        characters {
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

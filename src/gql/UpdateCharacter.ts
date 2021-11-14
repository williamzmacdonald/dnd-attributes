import { gql } from "@apollo/client";

export const UPDATE_CHARACTER = gql`
    mutation UpdateCharacter(
        $id: String!
        $name: String!
        $strength: Int!
        $dexterity: Int!
        $constitution: Int!
        $wisdom: Int!
        $intelligence: Int!
        $charisma: Int!
    ) {
        updateCharacter(
            id: $id
            name: $name
            strength: $strength
            dexterity: $dexterity
            constitution: $constitution
            wisdom: $wisdom
            intelligence: $intelligence
            charisma: $charisma
        ) {
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

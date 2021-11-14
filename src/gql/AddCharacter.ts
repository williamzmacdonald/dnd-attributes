import { gql } from "@apollo/client";

export const ADD_CHARACTER = gql`
    mutation AddCharacter(
        $name: String!
        $strength: Int!
        $dexterity: Int!
        $constitution: Int!
        $wisdom: Int!
        $intelligence: Int!
        $charisma: Int!
    ) {
        addCharacter(
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

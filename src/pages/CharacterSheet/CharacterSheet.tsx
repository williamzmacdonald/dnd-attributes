import { useLazyQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CHARACTER } from "../../gql/Character";
import { UPDATE_CHARACTER } from "../../gql/UpdateCharacter";
import merge from "deepmerge";

interface Character {
    id: string;
    name: string;
    attributes: {
        strength: number;
        dexterity: number;
        constitution: number;
        intelligence: number;
        wisdom: number;
        charisma: number;
    };
}

export const CharacterSheet = () => {
    let params = useParams();

    const getCharacterCompleted = (data: any) => {
        setCharacter({ ...data.character });
    };
    const [getCharacter, { loading, error, data }] = useLazyQuery(CHARACTER, {
        onCompleted: getCharacterCompleted,
    });
    const [character, setCharacter] = useState<Character | undefined>();

    const completedHandler = () => {};
    const [updateCharacter] = useMutation(UPDATE_CHARACTER, {
        onCompleted: completedHandler,
    });

    useEffect(() => {
        if (params.id) {
            getCharacter({
                variables: { id: params.id },
            });
        }
    }, [getCharacter, params.id]);

    if (loading || !character) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const submitHandler = (event: any) => {
        event.preventDefault();
        updateCharacter({
            variables: {
                id: character.id,
                name: character.name,
                strength: character.attributes.strength,
                dexterity: character.attributes.dexterity,
                constitution: character.attributes.constitution,
                intelligence: character.attributes.intelligence,
                wisdom: character.attributes.wisdom,
                charisma: character.attributes.charisma,
            },
        });
    };

    const changeAttributeHandler = (event: any) => {
        if (character && event.target.value) {
            setCharacter(
                merge(character, {
                    attributes: {
                        [event.target.name]: parseFloat(event.target.value),
                    },
                })
            );
        }
    };

    const changeNameHandler = (event: any) => {
        setCharacter({ ...character, name: event.target.value });
    };

    return (
        <form className="characterForm" onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                value={character.name}
                onChange={changeNameHandler}
            />
            <label htmlFor="strength">strength</label>
            <input
                id="strength"
                name="strength"
                value={character.attributes.strength}
                onChange={changeAttributeHandler}
            />
            <label htmlFor="dexterity">dexterity</label>
            <input
                id="dexterity"
                name="dexterity"
                value={character.attributes.dexterity}
                onChange={changeAttributeHandler}
            />
            <label htmlFor="constitution">constitution</label>
            <input
                id="constitution"
                name="constitution"
                value={character.attributes.constitution}
                onChange={changeAttributeHandler}
            />
            <label htmlFor="wisdom">wisdom</label>
            <input
                id="wisdom"
                name="wisdom"
                value={character.attributes.wisdom}
                onChange={changeAttributeHandler}
            />
            <label htmlFor="intelligence">intelligence</label>
            <input
                id="intelligence"
                name="intelligence"
                value={character.attributes.intelligence}
                onChange={changeAttributeHandler}
            />
            <label htmlFor="charisma">charisma</label>
            <input
                id="charisma"
                name="charisma"
                value={character.attributes.charisma}
                onChange={changeAttributeHandler}
            />
            <button>Update</button>
        </form>
    );
};

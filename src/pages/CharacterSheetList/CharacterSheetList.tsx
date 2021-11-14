import { useMutation, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { CHARACTERS } from "../../gql/Characters";
import { DELETE_CHARACTER } from "../../gql/DeleteCharacter";
import "./CharacterSheetList.css";

export const CharacterSheetList = () => {
    const { loading, error, data } = useQuery(CHARACTERS);
    const [deleteCharacter] = useMutation(DELETE_CHARACTER);

    const deleteHandler = (id: string) => {
        deleteCharacter({ variables: { id } });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const characters = data.characters.map((character: any) => (
        <div>
            <Link to={`/${character.id}`}>{character.name}</Link>
            <button onClick={() => deleteHandler(character.id)}>delete</button>
        </div>
    ));
    return (
        <div className="characterSheetList">
            {characters}
            <Link to="/add">New Character</Link>
        </div>
    );
};

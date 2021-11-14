import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { client } from "../..";
import { ADD_CHARACTER } from "../../gql/AddCharacter";
import "./AddCharacter.css";

export const AddCharacter = () => {
    const navigate = useNavigate();
    const completedHandler = (data: any) => {
        console.log(data);
        navigate(`/${data.addCharacter.id}`);
        client.refetchQueries({ include: ["characters"] });
    };

    const [mutateFunction] = useMutation(ADD_CHARACTER, {
        onCompleted: completedHandler,
    });

    const submitHandler = (event: any) => {
        const elements = event.target.elements;
        event.preventDefault();
        mutateFunction({
            variables: {
                name: elements.name.value,
                strength: parseFloat(elements.strength.value),
                dexterity: parseFloat(elements.dexterity.value),
                constitution: parseFloat(elements.constitution.value),
                intelligence: parseFloat(elements.intelligence.value),
                wisdom: parseFloat(elements.wisdom.value),
                charisma: parseFloat(elements.charisma.value),
            },
        });
    };

    return (
        <form className="characterForm" onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" />
            <label htmlFor="strength">strength</label>
            <input id="strength" name="strength" />
            <label htmlFor="dexterity">dexterity</label>
            <input id="dexterity" name="dexterity" />
            <label htmlFor="constitution">constitution</label>
            <input id="constitution" name="constitution" />
            <label htmlFor="wisdom">wisdom</label>
            <input id="wisdom" name="wisdom" />
            <label htmlFor="intelligence">intelligence</label>
            <input id="intelligence" name="intelligence" />
            <label htmlFor="charisma">charisma</label>
            <input id="charisma" name="charisma" />
            <button>Create</button>
        </form>
    );
};

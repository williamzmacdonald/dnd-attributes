import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddCharacter } from "./pages/AddCharacter/AddCharacter";
import { CharacterSheet } from "./pages/CharacterSheet/CharacterSheet";
import { CharacterSheetList } from "./pages/CharacterSheetList/CharacterSheetList";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<CharacterSheetList />} />
                <Route path="/add" element={<AddCharacter />} />
                <Route path=":id" element={<CharacterSheet />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

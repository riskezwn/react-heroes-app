import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { HeroScreen } from "../../../components/heroes/HeroScreen";
import "../../../setupTest";

describe("test en <HeroScreen/>", () => {
    test("debe de mostrar un heroe si el parametro existe y se encuentra", () => {
        const heroeId = "dc-batman";
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/hero/${heroeId}`]}>
                <Routes>
                    <Route path="/hero/:heroeId" element={<HeroScreen />} />
                </Routes>
            </MemoryRouter>
        );

        expect(wrapper.find(".row").exists()).toBeTruthy();
    });
});

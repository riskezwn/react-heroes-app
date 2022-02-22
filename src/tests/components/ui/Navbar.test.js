import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import { Navbar } from "../../../components/ui/Navbar";
import { types } from "../../../types/types";
import "../../../setupTest";
import { act } from "react-dom/cjs/react-dom-test-utils.development";

describe("test en <Navbar/>", () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: "riskezwn",
        },
    };
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        </AuthContext.Provider>
    );
    test("debe de mostrarse correctamente", () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(".text-info").text().trim()).toBe("riskezwn");
    });

    test("debe de llamar el logout y usar Navigate", () => {
        act(() => {
            wrapper.find("button").prop("onClick")();
        });

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout,
        });
    });
});

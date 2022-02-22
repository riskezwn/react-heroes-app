import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import { LoginScreen } from "../../../components/login/LoginScreen";
import "../../../setupTest";

describe("test en <LoginScreen/>", () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false,
        },
    };
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <LoginScreen />
            </MemoryRouter>
        </AuthContext.Provider>
    );
    test("debe mostrarse correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("debe de realizar el dispatch y la navegación", () => {
        // wrapper.find("button").prop("onClick")();
        // expect(contextValue.dispatch).toHaveBeenCalledWith({
        //     type: types.login,
        //     payload: {
        //         name: "riskezwn",
        //     },
        // });
    });
});

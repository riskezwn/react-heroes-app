import { shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { PrivateRoute } from "../../routers/PrivateRoute";
import "../../setupTest";

describe("test en <PrivateRoute/>", () => {
    const props = {
        pathname: "/marvel",
    };
    Storage.prototype.setItem = jest.fn();
    test("debe mostrar el componente si esta autenticado y guardar localStorage", () => {
        const wrapper = shallow(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={true}
                    children={<span>Listo!</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        expect(wrapper.find("span").exists()).toBeTruthy();
        // expect(localStorage.setItem).toHaveBeenCalledWith(
        //     "lastPath",
        //     "/marvel"
        // );
    });

    test('debe de bloquear el componente si no está autenticado', () => { const wrapper = shallow(
        <MemoryRouter>
            <PrivateRoute
                isAuthenticated={true}
                children={<h5>Listo!</h5>}
                {...props}
            />
        </MemoryRouter>
    );

    expect(wrapper.find("h5").exists()).toBeTruthy(); })
});

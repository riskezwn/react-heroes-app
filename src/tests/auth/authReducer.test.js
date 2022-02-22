import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("test en authReducer", () => {
    test("debe devolver el estado pord efecto", () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test("debe autenticar el colocar el username", () => {
        const action = {
            type: types.login,
            payload: {
                username: "riskezwn",
            },
        };
        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({ logged: true, username: "riskezwn" });
    });

    test("debe borrar el username del usuario y logged en false", () => {
        const action = {
            type: types.logout,
        };
        const state = authReducer(
            { logged: true, username: "riskezwn" },
            action
        );
        expect(state).toEqual({ logged: false });
    });
});

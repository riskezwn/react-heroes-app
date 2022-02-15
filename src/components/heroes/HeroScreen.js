import React, { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {
    const navigate = useNavigate();
    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroById(heroeId), [heroeId])

    const handleReturn = () => {
        navigate(-1);
    };
    useEffect(() => {
        if (!hero) {
            navigate("/");
        }
    });

    const { superhero, publisher, alter_ego, first_appearance, characters } =
        hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`../assets/heroes/${heroeId}.jpg`}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: </b>
                        {alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b>
                        {publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First appearance: </b>
                        {first_appearance}
                    </li>
                </ul>
                <div className="mt-3">
                    <h5>Characters</h5>
                    <p>{characters}</p>
                </div>

                <button className="btn btn-outline-primary" onClick={handleReturn}>
                    Return
                </button>
            </div>
        </div>
    );
};

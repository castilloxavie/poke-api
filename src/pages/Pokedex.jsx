import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import PokemonsList from "../components/pokedex/PokemonsList";
import {
    getAllPokemons,
    getAllType,
    getPokemonsByType,
} from "../services/pokemons.services";
import { paginateData } from "../utils/pagination";
import Pagination from "../components/pokedex/Pagination";

//Este componente muestra una lista de pokémons obtenidos y almacenados en el estado local.
//Utiliza el estado 'pokemons' para almacenar los datos.
//Utiliza 'useSelector' para obtener el nombre del entrenador del estado global.
//La función 'useEffect' se emplea para cargar los pokémons al montar el componente.
const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonsType, setPokemonsType] = useState("");
    const [type, setType] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const { name } = useSelector((store) => store.traner);

    const handleChange = (setState) => (e) => {
        setState(e.target.value);
    };

    const pokemonByName = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
    );

    useEffect(() => {
        if (!pokemonsType) {
            getAllPokemons()
                .then((data) => setPokemons(data))
                .catch((err) => console.log(err));
        }
    }, [pokemonsType]);

    useEffect(() => {
        if (pokemonsType) {
            getPokemonsByType(pokemonsType).then((data) => setPokemons(data));
        }
    }, [pokemonsType]);

    useEffect(() => {
        getAllType()
            .then((types) => setType(types))
            .catch((err) => console.log(err));
    }, []);

    const { itemCorrentPage, lastPage, pagesIncurrentBlocck } = paginateData(
        pokemonByName,
        currentPage
    );
    return (
        <main className="mx-10">
            <section className="mx-4">
                <p className=" line-clamp-1 mt-3 my-4">
                    <span className="text-red font-semibold capitalize ">Welcome {name}, </span>
                    Here you can get your favorite pokemon
                </p>
                <form className="flex flex-row flex-wrap justify-evenly">
                    <div>
                        <input className="drop-shadow-xl outline-none "
                            value={pokemonName}
                            onChange={handleChange(setPokemonName)}
                            type="text"
                            id=""
                            placeholder="Search Pokemo...."
                        />
                    </div>
                    <select className="my-4 -mt-1"
                        value={pokemonsType}
                        onChange={handleChange(setPokemonsType)}
                    >
                        <option value="">All pokemons</option>
                        {type.map((type) => (
                            <option
                                className="capitalize"
                                value={type.name}
                                key={type.name}
                            >
                                {type.name}
                            </option>
                        ))}
                    </select>
                </form>
            </section>
            <Pagination
                lastPage={lastPage}
                pagesIncurrentBlocck={pagesIncurrentBlocck}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            <PokemonsList pokemons={itemCorrentPage} />

            <Pagination
                lastPage={lastPage}
                pagesIncurrentBlocck={pagesIncurrentBlocck}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </main>
    );
};

export default Pokedex;

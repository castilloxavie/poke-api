import { useEffect, useState } from "react";
import { getPokemonsByUrl, joinPokemosType } from "../../services/pokemons.services";
import StatList from "./StatList";
import { bgStylePokemonType, borderStylePokemonType, textStyledPokemonByType } from "../../shared/pokemon";
import { Link } from "react-router-dom";


//Este componente recibe una URL de un Pokémon y muestra información sobre el mismo.
//Utiliza el estado local para almacenar la información del Pokémon.
//La función joinPokemosType concatena los tipos de Pokémon en una cadena.
//Utiliza useEffect para cargar la información del Pokémon cuando el componente se monta.
const PokemonsCard = ({ pokemonUrl }) => {
  const [pokemonsInfo, setPokemonsInfo] = useState(null);



  useEffect(() => {
    getPokemonsByUrl(pokemonUrl)
      .then((data) => setPokemonsInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Link
    to={`/pokedex/${pokemonsInfo?.id}`}
     className={`text-center capitalize border-[5px] rounded-md ${borderStylePokemonType[pokemonsInfo?.type[0]]}`}>

      <header className={`h-[80px] ${bgStylePokemonType[pokemonsInfo?.type[0]]} relative mb-8`}>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[65%]">
          <img className="h-full w-full object-contain" src={pokemonsInfo?.image} alt="" />
        </div>
      </header>
      <section>
        <h3 className={`text-lg  font-bold ${textStyledPokemonByType[pokemonsInfo?.type[0]]} `}>{pokemonsInfo?.name}</h3>

        <h4>{joinPokemosType(pokemonsInfo?.type)}</h4>
        <h5 className="text-sm mb-2">Types</h5>
        <hr />
        <StatList stats={pokemonsInfo?.stat} />
      </section>
    </Link>
  );
};
export default PokemonsCard;
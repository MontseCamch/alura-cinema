import styles from "./Favoritos.module.css"
import Banner from "components/Banner"
import Card from "components/Card"
import Titulo from "components/Titulo"
import { useFavoritosContext } from "context/Favoritos"

function Favoritos() {
    const { favorito } = useFavoritosContext();

    return (
    <>
        <Banner img="favoritos" color="#44d97d" />
      <Titulo>
        <h1>Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
    );
}

export default Favoritos
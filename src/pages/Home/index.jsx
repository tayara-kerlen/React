import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Nav from '../../components/Nav/Nav';

// Page
function Home() {
    return(
        <>
            <Header logo="ImobiTech" />
            
            <Nav />

            <Main
                titulo="Bem-vindo(a) à ImobiTech"
                texto1="Veritatis iste beatae, quam eum mollitia similique corporis enim non placeat? Aspernatur libero rem numquam. Esse nobis harum veniam obcaecati, in earum."
            />

            <Footer contato="contato@imobitech.com.br" />
        </>
    );
}

export default Home;

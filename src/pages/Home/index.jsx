import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main';
import Nav from '../../components/Nav/Nav'

// Page
function Home() {
    return(
        <>
           <Header logo="ImobiTech" />

           <Nav />
           
           <main>
               <Button titulo="Teste 3" />

               <section id>

               </section>
           </main>

           {/* <Main 
               titulo="Bem-vindo(a) à ImobiTech" 
               texto1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, aspernatur."
                           
           />   */}

           <Main />
            
           <Footer contato="contato@imobitech.com.br" />       
        </>
    );
}

export default Home;
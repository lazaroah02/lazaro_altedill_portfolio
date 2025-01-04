import NavBar from '@/components/NavBar'
import {Title} from './Title';
import './index.css'

function Home({id, children}) {
    return ( 
        <main id = {id} className = "homepage">
            <NavBar/>
            <article className = "homepage-content-container">
                <Title/>
                {children}
            </article>
        </main>
     );
}

export default Home;
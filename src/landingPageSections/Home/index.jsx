import NavBar from '@/components/NavBar'
import {Title} from './Title';
import { HomePageImage } from './Image';
import './index.css'

function Home({id}) {
    return ( 
        <main id = {id} className = "homepage">
            <NavBar/>
            <article className = "homepage-content-container">
                <Title/>
                <HomePageImage/>
            </article>
        </main>
     );
}

export default Home;
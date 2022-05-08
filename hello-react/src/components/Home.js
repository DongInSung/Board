import homeStyle from './Home.module.css';



import Header from "./Header";
import Content from "./Content";

function Home() {

    return( 
        <div className={homeStyle.container}>
            <Header />
            <Content />
        
        </div>
    )
}

export default Home;
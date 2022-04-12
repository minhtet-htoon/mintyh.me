import MhHeader from "../components/header";
import Footer from "../components/footer";


export default function aboutMe() {
    return(
        <div>
            <MhHeader/>
            <div
                style={
                    {
                        margin:'auto',
                        width:"80%",
                    }
                }
                className="flex flex-row">
                <div
                    className="basis-1/2">
                    <h1
                        style={
                            {
                                fontSize:60,
                                textAlign:'center'
                            }
                        }
                    >
                        Minhtet Htoon
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores aut, debitis dignissimos distinctio dolore dolorum ex fugit incidunt, minus officia placeat quae, quam sunt tempore ut velit. Dignissimos, repudiandae!
                    </p>
                </div>
                <div className="basis-1/2">

                </div>
            </div>
            <Footer/>
        </div>
    )
}
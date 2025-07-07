    
    import Messi from './Messi';
import Ronaldo from './Ronaldo';
import Neymar from './Neymar';
    import { useParams } from 'react-router-dom';
    function PersonDetailWrapper (){
        const { id } = useParams();

        if(id==1){
            return (
                <div>
                    <Messi />
                </div>
            );
        } else if (id == 2) {
            return (
                <div>
                    <Ronaldo />
                </div>
            );
        } else if (id == 3) {
            return (
                <div>
                    <Neymar />
                </div>
            );
        }
        else{
            return (
                <div>
                    <h1>Person not found</h1>
                    <p>Please check the ID and try again.</p>
                </div>
            );
        }
    }

    export default PersonDetailWrapper;
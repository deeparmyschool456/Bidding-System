import React , {useState} from 'react';
import ValidEmail from '../Components/validEmail';
import NewPassword from '../Components/NewPassword';

const vs100 = {
    minHeight : "100vh",
    minWidth : "100vw"
};

const ForgotPassword = () => {
    

    const [email, setEmail] = useState(false);

    return <div 
    className=" d-flex justify-content-center align-items-center" 
    style={ vs100 }>
         { email ? <NewPassword /> : <ValidEmail />  }
    </div>
};

export default ForgotPassword;
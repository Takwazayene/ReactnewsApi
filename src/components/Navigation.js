import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {



    return(
        <ul style={{display:'flex'}}>
            <Link to="/">
            <li style={{marginLeft:10, listStyle:'none'}}>Accueil</li>

            </Link>

            <Link to='/details'>
            <li style={{marginLeft:10, listStyle:'none'}}>details</li>

            </Link>



        </ul>
    )
}

export default Navigation;
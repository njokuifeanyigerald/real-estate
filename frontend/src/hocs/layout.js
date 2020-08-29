import React from 'react';
import Navbar from '../components/navbar'

const layout = (props) => (
    <div>
        <Navbar />
        {props.children}
    </div>
)

export default layout;
import React from 'react';
import './DaysIcode.css'
import codeList from '../../assets/Screenshot_6.png';
const DaysIcode = () => {
    return (
        <div style={{marginTop:'8rem'}}>
            <section className='container'>
            <h5>Git Commit</h5>
            <h2>Days I Code</h2>
            <div className='gitCommit_img'>
            <img  src={codeList} alt="commit" />
            </div>
        </section>
        </div>
    );
};

export default DaysIcode;
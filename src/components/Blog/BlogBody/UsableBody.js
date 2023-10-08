import React from 'react';
import scroll1 from '../../../assets/images/scroll1.jpg';

const UsableBody = () => {
    return (
        <div className={`mt-5`} >
            <div className={`flex`} >
                <div>
                    <img className={`rounded-3xl`} src={scroll1} alt={`scroll1`} />
                </div>
                <div className={`py-5 px-4 ml-12`} >
                    <a className={`p-2 text-xs font-bold bg-slate-300 rounded-3xl`} >5 min read</a>
                    <h4 className={`mt-3 font-bold text-3xl mb-5 `} >Why Early Fall Could Be the Next Housing Market ‘Sweet Spot’</h4>
                    <h4>In this month’s market report, we ask in-house economist Jeff Tucker about what seasonal cycles look like in a remarkably unusual year for home buying.</h4>
                    <button className={`mt-3 bg-blue-700 text-white p-3 rounded-xl`} >Read More</button>
                </div>
            </div>

        </div>
    );
};

export default UsableBody;

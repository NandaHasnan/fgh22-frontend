import { useState } from "react";
import { Link } from "react-router-dom";

function AccountMobile(props) {
    useState(0); 

    return (
        <div className="py-6 px-12 w-full h-20 rounded-lg bg-white">
            <div className="flex justify-between">
                {props.status === 'active' &&<Link to="/profil" className='text-lg text-[#14142B]'>{props.content}</Link>}
                {props.status2 === 'not' &&<Link to="/odrhistori" className='text-lg text-[#AAAAAA]'>{props.content2}</Link>}
            </div>
        </div>
    );
}

export default AccountMobile;

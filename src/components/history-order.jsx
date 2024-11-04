import { useState } from "react";
import { Link } from "react-router-dom";

// function AccountProfile() {
//     const [activeTab, setActiveTab] = useState("false"); 

//     return (
//         <div className="py-6 px-12 w-[950px] h-20 rounded-lg bg-white">
//             <div className="flex gap-14">
//                 <Link to="/profil" className={`text-lg ${activeTab && "text-[#14142B]"} ${!activeTab && "text-[#AAAAAA]"}`} onClick={() => setActiveTab(!activeTab)}>Account Settings</Link>
//                 <Link to="/odrhistori" className={`text-lg ${activeTab && "text-[#AAAAAA]"} ${!activeTab && "text-[#14142B]"}`} onClick={() => setActiveTab(!activeTab)}>Order History</Link>
//             </div>
//         </div>
//     );
// }

// export default AccountProfile;

function HistoryOrder(props) {
    useState(0); 

    return (
        <div className="py-6 px-12 w-[950px] h-20 rounded-lg bg-white">
            <div className="flex gap-14">
            {props.status === 'not' &&<Link to="/profil" className='text-lg text-[#AAAAAA]'>{props.content}</Link>}
                {props.status2 === 'active' &&<Link to="/odrhistori" className='text-lg text-[#14142B]'>{props.content2}</Link>}
            </div>
        </div>
    );
}

export default HistoryOrder;

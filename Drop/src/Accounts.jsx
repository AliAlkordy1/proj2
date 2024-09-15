import { Icon } from "@iconify/react/dist/iconify.js";

export default function Accounts({img,name,disc,number}){
    return<>
        <div className="ac-container">
            <div className="img-div">
            <img src={img} alt={name} className="account-img"/>
            </div>
            <div className="disc-div">
                <span style={{  paddingBottom: '10px',fontSize: 'x-large' }}>{name}</span>
                <span style={{  fontSize: 'small' }}>{disc}</span>
            </div>
            <span className="number-div">{number}</span>
            <div className="icon-div">

            <Icon icon="tabler:dots" width="27" height="27" className="dots-icon" />
            </div>

        </div>
    
    </>
}
import Accounts from "./Accounts"


const acc = [
    { id:1 , img :"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='84.56' height='72' viewBox='0 0 256 218'%3E%3Cpath fill='%230061ff' d='M63.995 0L0 40.771l63.995 40.772L128 40.771zM192 0l-64 40.775l64 40.775l64.001-40.775zM0 122.321l63.995 40.772L128 122.321L63.995 81.55zM192 81.55l-64 40.775l64 40.774l64-40.774zM64 176.771l64.005 40.772L192 176.771L128.005 136z'/%3E%3C/svg%3E",
        name :"Dropbox" , disc :"dropbox.com", number :"24 accounts"},
        { id:2 , img :"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='38' height='38' viewBox='0 0 256 256'%3E%3Cpath fill='%23cb1f27' d='M0 128.002c0 52.414 31.518 97.442 76.619 117.239c-.36-8.938-.064-19.668 2.228-29.393c2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136c11.643 0 17.268 8.745 17.268 19.217c0 11.704-7.465 29.211-11.304 45.426c-3.207 13.578 6.808 24.653 20.203 24.653c24.252 0 40.586-31.149 40.586-68.055c0-28.054-18.895-49.052-53.262-49.052c-38.828 0-63.017 28.956-63.017 61.3c0 11.152 3.288 19.016 8.438 25.106c2.368 2.797 2.697 3.922 1.84 7.134c-.614 2.355-2.024 8.025-2.608 10.272c-.852 3.242-3.479 4.401-6.409 3.204c-17.884-7.301-26.213-26.886-26.213-48.902c0-36.361 30.666-79.961 91.482-79.961c48.87 0 81.035 35.364 81.035 73.325c0 50.213-27.916 87.726-69.066 87.726c-13.819 0-26.818-7.47-31.271-15.955c0 0-7.431 29.492-9.005 35.187c-2.714 9.869-8.026 19.733-12.883 27.421a127.9 127.9 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0C57.314 0 0 57.309 0 128.002'/%3E%3C/svg%3E",
            name :"Pinterest" , disc :"Pinterest.com", number :"3 accounts"},
            { id:3 , img :"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 256 256'%3E%3Cpath fill='%23f1511b' d='M121.666 121.666H0V0h121.666z'/%3E%3Cpath fill='%2380cc28' d='M256 121.666H134.335V0H256z'/%3E%3Cpath fill='%2300adef' d='M121.663 256.002H0V134.336h121.663z'/%3E%3Cpath fill='%23fbbc09' d='M256 256.002H134.335V134.336H256z'/%3E%3C/svg%3E",
                name :"Microsoft" , disc :"Microsoft.com", number :"19 accounts"},
  

  ]


const AccountList =acc.map((Account) => {
    return ( <><div className="ac-container-main"><Accounts key={Account.id} img={Account.img} name={Account.name} disc={Account.disc} number={Account.number} > </Accounts></div></> )


  }) 



export default function DownBar(){
    return(<>
    <div className="DownBar-container" >
        <h1>Accounts</h1>
        <div>
            {AccountList}

        </div>



    </div>
    
    
    
    
    </>)

}
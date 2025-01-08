import React , {useState} from 'react'

import UserContext from './UserContext'

const UserContextProvider= ({children})=>{
 const [user, setUser] = useState(null) // this is created so that,this data should be accesible by all the children
 return(
    <UserContext.Provider value={{user,setUser}}>   {/* UserContext gives access to Provider(React gives this feature) */}
       {children}

    </UserContext.Provider>
 )
}

export default UserContextProvider
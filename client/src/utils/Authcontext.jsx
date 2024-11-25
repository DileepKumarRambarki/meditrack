import { useContext,createContext,useState } from "react";
const Authcontext=createContext();
export const AuthProvider=({children})=>{
    const [isValid, setValid] = useState(() => localStorage.getItem("isValid") === "true");

    const [usermail,setmail]=useState(localStorage.getItem("usermail")||"");
    const login=(usermail)=>{
        localStorage.setItem("isValid","true");
        localStorage.setItem("usermail",usermail);
        setmail(usermail);
        console.log(usermail);
        setValid(true);
    }
    const logout=()=>{
        setValid(false)
        localStorage.removeItem("usermail");
        localStorage.removeItem("isValid");
    };
    return(
        <Authcontext.Provider value={{usermail,isValid,login,logout}}>
            {children}
        </Authcontext.Provider>
    )
}
export const useAuth=()=>useContext(Authcontext);
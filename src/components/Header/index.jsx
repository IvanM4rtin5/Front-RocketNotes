import { RiShutDownLine } from "react-icons/ri";
import {useAuth} from "../../hooks/auth"
import { Container , Profile, Logout } from "./style";

export function Header(){
    const { signOut } = useAuth();
    return(
    
        <Container>
            <Profile to="/profile">
                <img src="https://avatars.githubusercontent.com/u/160087356?s=400&u=84fed1244a44de04e74aa6191111f72003cb0661&v=4"
                alt="foto do usuário"/>

                <div>
                    <span>Bem-vindo</span>
                    <strong>Ivan Martins</strong>
                </div>
            </Profile>
                <Logout onClick={signOut}>
                    <RiShutDownLine/>
                </Logout>
        </Container>
    )
};
import { RiShutDownLine } from "react-icons/ri";
import {useAuth} from "../../hooks/auth"
import { Container , Profile, Logout } from "./style";
import {} from "../services/api"

export function Header(){
    const { signOut, user } = useAuth();
    return(
        const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder
    
        <Container>
            <Profile to="/profile">
                <img src={avatar}
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

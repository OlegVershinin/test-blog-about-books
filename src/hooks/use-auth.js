import { useSelector } from "react-redux";
import { linkState } from "/util/linkState";

export function useAuth() {
    const { email, login, id } = useSelector(linkState.getUseAuth);

    return {
        isAuth: !!email,
        email,
        login,
        id,
    };
}

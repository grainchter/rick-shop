import { getUserToken } from "../../store/user";
import { useSelector } from "react-redux";

import RegisterPage from "../../components/main/RegForm/reg";
import User from "../../components/main/user/User";

const UserPageMobile = () => {

    const userToken = useSelector(getUserToken);

    console.log(userToken);

    return (
        <>
            {
                Object.keys(userToken).length !== 0 &&
                < User />

            }

            {
                Object.keys(userToken).length === 0 &&
                < RegisterPage />

            }

        </>
    );
}

export default UserPageMobile;
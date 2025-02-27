import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../shared/redux";
import { deleteUser } from "./model/delete-user";
import { UserId, usersSlice } from "./users.slice";

export function UserInfo() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { id = "" } = useParams<{ id: UserId }>();
    const isPending = useAppSelector(
        usersSlice.selectors.selectIsFetchUserPending
    );
    const isDeletePending = useAppSelector(
        usersSlice.selectors.selectIsDeleteUserPending
    );
    const user = useAppSelector((state) =>
        usersSlice.selectors.selectUserById(state, id)
    );

    const handleBackButtonCLick = () => {
        navigate("..", { relative: "path" });
    };

    const handleDeleteButtonClick = () => {
        dispatch(deleteUser(id)).then(() =>
            navigate("..", { relative: "path" })
        );
    };

    if (isPending || !user) {
        return <div>...Loading</div>;
    }
    return (
        <div className="flex flex-col items-center">
            <button
                onClick={handleBackButtonCLick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md"
            >
                Back
            </button>
            <h2 className="text-3xl">{user.name}</h2>
            <p className="text-xl">{user.description}</p>
            <button
                onClick={handleDeleteButtonClick}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded md"
                disabled={isDeletePending}
            >
                Delete
            </button>
        </div>
    );
}

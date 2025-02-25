export type UserId = string;

export type User = {
    id: UserId;
    name: string;
    description: string;
};

type UsersState = {
    entities: Record<UserId, User>;
    ids: string[];
    selectedUserId: UserId | undefined;
};

export const initialUsersList: User[] = Array.from(
    { length: 3000 },
    (_, index) => ({
        id: `user${index + 11}`,
        name: `User ${index + 11}`,
        description: `Description for User ${index + 11}`,
    })
);

export type UsersSelectedAction = {
    type: "usersSelected";
    payload: {
        userId: UserId;
    };
};

export type UsersRemoveSelectedAction = {
    type: "usersRemoveSelected";
};

export type UsersStoredAction = {
    type: "usersStored";
    payload: {
        users: User[];
    };
};

type Action =
    | UsersStoredAction
    | UsersSelectedAction
    | UsersRemoveSelectedAction;

const initialUsersState: UsersState = {
    entities: {},
    ids: [],
    selectedUserId: undefined,
};

export const usersReducer = (
    state = initialUsersState,
    action: Action
): UsersState => {
    switch (action.type) {
        case "usersStored": {
            const { users } = action.payload;
            return {
                ...state,
                entities: users.reduce((acc, user) => {
                    acc[user.id] = user;
                    return acc;
                }, {} as Record<UserId, User>),
                ids: users.map((user) => user.id), // Записываем массив id
            };
        }

        case "usersSelected": {
            const { userId } = action.payload;
            return {
                ...state,
                selectedUserId: userId,
            };
        }

        case "usersRemoveSelected": {
            return {
                ...state,
                selectedUserId: undefined,
            };
        }
        default:
            return state;
    }
};

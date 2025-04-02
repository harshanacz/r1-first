const users = [
    { id: 1, name: 'Grace' },
    { id: 2, name: 'Jack' },
    { id: 3, name: 'Alice' },
    { id: 4, name: 'Bob' },
    { id: 5, name: 'Charlie' },
    { id: 6, name: 'David' },
    { id: 7, name: 'Eve' },
    { id: 8, name: 'Frank' },
    { id: 9, name: 'Grace' },
    { id: 10, name: 'Hank' },
    { id: 11, name: 'Ivy' },
    { id: 12, name: 'Jack' },
]

const getUsers = (cb) => {
    try {
        cb(null, users);
    } catch (err) {
        cb(err);
    }
}

const getUserbyId = (id, cb) => {
    try {
        const user = users.find(user => user.id == id);
        if (!user) {
            cb(new Error("User not found"));
        } else {
            cb(null, user);
        }
    } catch (err) {
        cb(err);
    }
}

exports.getUsers = getUsers;
exports.getUserbyId = getUserbyId;
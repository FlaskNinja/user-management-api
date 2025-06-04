import { v4 as uuid4 } from 'uuid';

let users = [];

// GET all users
export const getUsers = (req, res) => {
    try {
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// CREATE a new user
export const createUser = (req, res) => {
    const { firstName, lastName, age } = req.body;

    if (!firstName || !lastName || !age) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const newUser = { ...req.body, id: uuid4() };
    users.push(newUser);

    res.status(201).json({ message: `User with the username ${firstName} added successfully`, user: newUser });
};

// GET a specific user by ID
export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find(user => user.id === id);

    if (!foundUser) {
        return res.status(404).json({ message: `User with ID ${id} not found` });
    }

    res.status(200).json(foundUser);
};

// DELETE a user
export const deleteUser = (req, res) => {
    const { id } = req.params;
    const userExists = users.some(user => user.id === id);

    if (!userExists) {
        return res.status(404).json({ message: `User with ID ${id} not found` });
    }

    users = users.filter(user => user.id !== id);
    res.status(200).json({ message: `User with ID ${id} deleted successfully` });
};

// UPDATE a user (partial update)
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({ message: `User with ID ${id} not found` });
    }

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.status(200).json({ message: `User with ID ${id} updated`, user });
};

// OVERRIDE a user (complete update)
export const overrideData = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({ message: `User with ID ${id} not found` });
    }

    if (!firstName || !lastName || !age) {
        return res.status(400).json({ message: 'All fields (firstName, lastName, age) are required' });
    }

    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;

    res.status(200).json({ message: `User with ID ${id} overridden`, user });
};

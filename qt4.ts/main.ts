import { UserDAO } from "./UserDAO";

const userDAO = new UserDAO();


userDAO.insert('กิตติโชค', 'kittichok@gmail.com');

const users = userDAO.findAll();
users.forEach(u => {
    console.log(u.getInfo());
});
# Valispace Challenge

This is my solution for the following challenge.

> The challenge consists of creating a simple post timeline. The posts consist of text but it can
also refer to data from employees, such as username. The employees can be added and
removed from the database (can be saved in local storage, no backend required). No logins
or other securities are required.

This challenge was requested by [Valispace](https://www.valispace.com/) and is part of the recruiting process.

### ✨ [Demo](https://cyrillbrito.github.io/valispace-challenge/)

## Requirements

**Admin**

- [ ] All fields (see below) are required;
- [ ] ID and Phone are unique;
- [ ] ID cannot be changed but all the other values can;
- [ ] Username is only valid with the format [\w-_]+

**Home**

- [ ] By typing ‘@’ inside a new post there should popup an autocomplete to help user
select an employee to refer in the post;
- [ ] When changing the username of an employee, it should reflect in already created
posts. A possible solution is saving the text of the post as <employee id=”1”
field=”username”></employee> instead of @mathilde, or #992312312;
- [ ] By typing ‘#’ it should popup an autocomplete to help user select the phone number;
- [ ] Inside the post, when hovering the username or name of an employee a popup
should show with the full details of that employee (name, username, phone, role);
- [ ] Possibility to edit already posted messages.


## Running locally

First make sure to have Node installed.

```sh
npm install
npm run start
```

# Valispace Challenge

This is my solution for the following challenge.

> The challenge consists of creating a simple post timeline. The posts consist of text but it can
also refer to data from employees, such as username. The employees can be added and
removed from the database (can be saved in local storage, no backend required). No logins
or other securities are required.

This challenge was requested by [Valispace](https://www.valispace.com/) as part of the recruiting process.

### ✨ [Live Demo](https://cyrillbrito.github.io/valispace-challenge/)

## Requirements

**Path '/admin'**

- [x] All fields (see below) are required
- [x] ID and Phone are unique
- [x] ID cannot be changed but all the other values can
- [x] Username is only valid with the format [\w-_]

ID | USERNAME | PHONE | ROLE | NAME
-- | -- | -- | -- | -- 
1 | mathilde | 992312312 | CEO | Mathilde Saylors
2 | alia | 986733455 | Designer | Alia Ginder
3 | freeman | 971232343 | Developer | Freeman Litten
4 | piedad | 992362345 | Sales | Piedad Dewald
5 | beau | 912342303 | PR | Beau Siegel


**Path '/'**

- [x] By typing '@' inside a new post there should popup an autocomplete to help user select an employee to refer in the post
- [x] When changing the username of an employee, it should reflect in already created posts
- [x] By typing '#' it should popup an autocomplete to help user select the phone number
- [x] Possibility to edit already posted messages
- [x] Inside the post, when hovering the username or name of an employee a popup should show with the full details of that employee (name, username, phone, role)

**Note:** Instead of on hover, the popup only shows on click. On hover could be achieved using the cdk overlay but because of time constrains it was easier to do on click.


## Running locally

First make sure to have NodeJS instaled.

```sh
npm install
npm run start
```

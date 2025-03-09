# GovTech Technical Assessment
This repository contains the codebase for the NextJS web app and the answers to the two case study questions
for the GovTech Software Engineer (Careers & Skills Passport) role.

## Case Study 1
Below is the fixed code snippet for Case Study 1:
```
const [user, setUser] = React.useState({ 
  name: 'John', 
  age: 25 
});
  
const updateAge = () => {
  setUser(user =>  ({
    ...user,
    age: 26
  }))
};
```
## Case Study 2
Below is the fixed code snippet for Case Study 2:
```
const [users, setUsers] = useState([
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' }
]);

// Updating an object in array
const updateUser = (id, newName) => {
  setUsers(users => 
    users.map(user =>
      user.id === id ? { ...user, name: newName } : user
    )
  );
};
```

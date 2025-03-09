# GovTech Technical Assessment
This repository contains the codebase for the NextJS web app and the answers to the case study questions
for the GovTech Software Engineer (Careers & Skills Passport) role.

## Case Study 1
### Issue
The React state is being mutated directly, so React does not trigger a re-render of the component.

Instead, a new object should be created to be passed into the ```setUser``` function to replace the ```user``` variable
for React to trigger a re-render of the component.

### Fixed Code Snippet
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
### Issue
Similarly to Case Study 1, React state is being mutated directly, so React does not trigger a re-render of the component.

Instead, a new array should be created to be passed into the ```setUsers``` function to replace the ```users``` variable
for React to trigger a re-render of the component.

### Fixed Code Snippet
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
## Case Study 3
Screenshot of the UI design:

![UI Screenshot](https://github.com/user-attachments/assets/fafe1b51-fd52-4db8-a61c-c159083da13c)

### Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)


### Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/nicolaskjh/govtech-tech-test.git
2. **Navigate to project directory**:
   ```
   cd govtech-tech-test\app
   ```
3. **Install dependencies**:
   ```
   npm install
   ```
4. **Build the app**:
   ```
   npm run build
   ```
5. **Run the production build**:
   ```
   npm run start
   ```
### Design Justification
This app implements the optional delete user functionality. The delete functionality is implemented by having a delete button beside each user.

#### Implementation Design
Upon clicking the delete button for a particular user, the user ID ```id``` is passed into the ```deleteUser``` function.

The ```deleteUser``` function then takes in this user ID ```id```, and filters the current ```users``` array on the condition ```user.id !== id```
for each ```user```. Upon filtering, the app sets the state of ```users``` to the filtered array.

#### UI Design
The delete button is designed to be red.

The colour red makes the button highly visible, with red typically representing some kind of urgent/important warning before the user clicks it.
Each name has a delete button next to it so that the user does not have to manually count the id of the name they wish to delete.

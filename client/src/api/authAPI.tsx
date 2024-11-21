import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
   const response = await fetch('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  });
  
   console.log(response)

   const data = await response.json();
  //  console.log(data)
   if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Error: ${errorData.message}`);
   }
return data;
  } catch (err) {
    console.log('Error with user login: ', err);
    return Promise.reject('Could not fetch user info');
  }
}



export { login };

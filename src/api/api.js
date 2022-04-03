import axios from "axios";

const baseRoute = "http://localhost:8000";

const userLogin = async (email, password) => {
  const slug = "/api/login";
  const url = `${baseRoute}${slug}`;
  const user = {
    email: email,
    password: password,
  };

  try {
    const response = await axios.post(url, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response;

    return data;
  } catch (err) {
    console.log(err.message);
  }
};

const UserRegister = async (userData) => {
  const slug = "/api/register";
  const url = `${baseRoute}${slug}`;

  try {
    axios.post(url, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

export { userLogin, UserRegister };

import React, { useState, useEffect, useContext } from "react";
import { Button, useToast } from "@chakra-ui/react";
import axios from "axios";
import Cookies from "js-cookie";
import { Store } from "../../Context/Store";
import { useRouter } from "next/router";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useRouter();

  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const { redirect } = history.query;

  useEffect(() => {
    if (userInfo) {
      history.push("/admin/dashboard");
    }
  }, []);

  const regiser_user = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post("/api/auth/register", {
        username: username,
        email: "tunezafrica1@gmail.com",
        password: password,
      });
      toast({
        title: "Loggin successful",
        status: "success",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast({
        title: "Loggin Failed!",
        status: "error",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const login_user = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post("/api/auth/login", {
        email: username,
        password: password,
      });
      dispatch({ type: "USER_LOGIN", payload: data });
      Cookies.set("userInfo", JSON.stringify(data));
      setTimeout(() => {
        history.push(redirect || "/");
      }, 1000);
      toast({
        title: "Loggin successful",
        status: "success",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast({
        title: "Loggin Failed!",
        status: "error",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="min-h-screen h-screen w-screen flex-1 flex flex-row items-center bg-gray-100 ">
      <div className="flex flex-col w-1/2 mx-auto items-center">
        <p className="text-gray-700 py-2 font-semibold text-center text-lg">
          Sign in
        </p>
        <div className="flex flex-col w-full bg-white rounded p-2 space-y-6">
          <div className="flex flex-col p-1 w-full">
            <p className="text-sm font-semibold text-gray-600">
              username / email
            </p>
            <input
              type="text"
              placeholder="enter your username or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-100 rounded p-2 border border-gray-100 text-gray-700 outline-none"
            />
          </div>
          <div className="flex flex-col p-1">
            <p className="text-sm font-semibold text-gray-600">password</p>
            <input
              type="password"
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-100 rounded p-2 border border-gray-100 text-gray-700 outline-none"
            />
          </div>
          <Button
            onClick={login_user}
            isLoading={loading}
            colorScheme={"green"}
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;

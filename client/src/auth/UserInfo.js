import { jwt_decode, jwtDecode } from "jwt-decode";

export default function getUserInfo() {
  try {
    const token = localStorage.getItem("token");
    if (!token) return null;
    return jwtDecode(token);
  } catch (err) {
    console.error("Invalid token", err);
    return null;
  }
}

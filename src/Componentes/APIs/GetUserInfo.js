import APIHandler from "./APIHandler";

export default function GetUserInfo(userId) {
  const users = APIHandler();
  return users
    .filter((user) => user.id === userId)
    .map((user) => {
      return {
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
      };
    });
}

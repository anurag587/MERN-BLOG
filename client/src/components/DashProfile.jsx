import { Button, Label, TextInput } from "flowbite-react";
import { useSelector } from "react-redux";
import { signOutSuccess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


export default function DashProfile() {
  const currentUser = useSelector((state) => state.user.currentUser);
  //   console.log(currentUser);
  const dispatch = useDispatch();
  const handleSignOut = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signOutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        <div
          className="w-32 h-32 self-center cursor-pointer shadow-md
            overflow-hidden rounded-full"
        >
          <img
            src={currentUser.profilePicture}
            alt="user"
            className="rounded-full w-full h-full object-cover border-8
            Iborder-[lightgray]"
          />
        </div>
        <Label className="text-center">Username</Label>
        <TextInput
          type="username"
          placeholder="username"
          id="username"
          defaultValue={currentUser.username}
        />
        <Label className="text-center">Email</Label>
        <TextInput
          type="email"
          placeholder="email"
          id="email"
          defaultValue={currentUser.email}
        />
        {currentUser.isAdmin && (
          <Link to={"/create-post"}>
            <Button gradientDuoTone="redToYellow" outline className="w-full">
              Create a Post
            </Button>
          </Link>
        )}
      </form>
      {/* <span
            className="cursor-pointer text-center text-red-500"
            onClick={handleSignOut}
        >
            Sign Out
        </span> */}
    </div>
  );
}

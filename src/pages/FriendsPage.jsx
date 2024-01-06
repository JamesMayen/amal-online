import { FiMail } from "react-icons/fi";
import BackBtn from "../util/BackBtn";

export default function FriendsPage() {
  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <BackBtn />
          <div className="text-xl">Friends</div>
        </div>
        <div className="border px-3 py-1">All schools</div>
      </div>
      <div className="mt-5">
        {friends.map((user, index) => (
          <div className="flex items-center mb-4">
            <div className="h-14 w-14 rounded-full overflow-hidden mr-3">
              <img
                src={process.env.PUBLIC_URL + `/avatars/image-${index + 1}.png`}
                alt=""
              />
            </div>
            <div className="flex-1">
              <span className="text-xl">{user.name}</span>
              <p>{user.school}</p>
            </div>
            <div className="text-2xl">
              <FiMail />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const friends = [
  {
    name: "Suzan John",
    school: "Mahad Juba",
    // avatar:process.env.PUBLIC_URL+'/images/'
  },
  {
    name: "Suzan John",
    school: "Mahad Juba",
  },
  {
    name: "Suzan John",
    school: "Mahad Juba",
  },
  {
    name: "Suzan John",
    school: "Mahad Juba",
  },
  {
    name: "Suzan John",
    school: "Mahad Juba",
  },
  {
    name: "Suzan John",
    school: "Mahad Juba",
  },
  {
    name: "Suzan John",
    school: "Mahad Juba",
  },
];

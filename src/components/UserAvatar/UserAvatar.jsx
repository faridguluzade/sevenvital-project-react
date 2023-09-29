import "./UserAvatar.styles.scss";

const UserAvatar = ({ user }) => {
  const avatar = user?.user_metadata?.avatar;
  const fullName = user?.user_metadata?.fullName;

  console.log(user);

  return (
    <div className="user-avatar">
      <img src={avatar || "default-user.jpg"} alt={`Avatar of ${fullName}`} />
      <span>{fullName}</span>
    </div>
  );
};

export default UserAvatar;

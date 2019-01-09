const Avatar = () => {
  const avatar = localStorage.getItem('avatar');
  return avatar;
};

export default Avatar;

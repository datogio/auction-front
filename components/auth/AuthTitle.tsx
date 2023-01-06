interface AuthTitleProps {
  title: 'Sign In' | 'Sign Up';
}

const AuthTitle = (props: AuthTitleProps) => {
  return (
    <h1 className="text-center text-4xl text-white font-bold">{props.title}</h1>
  );
};

export default AuthTitle;

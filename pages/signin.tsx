import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const signin: React.FC<any> = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => {
        return user ? (
          <>
            <span>you are logged in. username: {user.username}</span>
            <button onClick={signOut}>Sign out</button>
          </>
        ) : (
          <></>
        );
      }}
    </Authenticator>
  );
};

export default signin;

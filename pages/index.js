import React from "react";
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction
} from "next-firebase-auth";
import Header from "../components/Header";

const styles = {
  content: {
    padding: 32
  },
  infoTextContainer: {
    marginBottom: 32
  }
};

const Demo = () => {
  const AuthUser = useAuthUser();
  return (
    <div>
      <Header email={AuthUser.email} signOut={AuthUser.signOut} />
      <div style={styles.content}>
        <div style={styles.infoTextContainer}>
          <h3>Home</h3>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN
})(async ({ AuthUser }) => {
  const token = await AuthUser.getIdToken();
});

export default withAuthUser()(Demo);

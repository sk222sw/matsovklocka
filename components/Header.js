import React from "react";
import Link from "next/link";

const styles = {
  container: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 16
  },
  button: {
    marginLeft: 16,
    cursor: "pointer"
  }
};

const Header = ({ email, signOut }) => (
  <div style={styles.container}>
    {email ? (
      <>
        <button
          type="button"
          onClick={() => {
            signOut();
          }}
          style={styles.button}
        >
          Sign out
        </button>
      </>
    ) : (
      <>
        <Link href="/auth">
          <a>
            <button type="button" style={styles.button}>
              Sign in
            </button>
          </a>
        </Link>
      </>
    )}
  </div>
);

export default Header;

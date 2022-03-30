import React from "react";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material/";

const useStyles = makeStyles({
    root: {
        marginTop: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
});
export const MainContainer = ({ children, ...props }) => {
    const styles = useStyles();

    return (
        <Container
            className={styles.root}
            container="main"
            maxWidth="xs"
            {...props}
        >
            {children}
        </Container>
    );
};

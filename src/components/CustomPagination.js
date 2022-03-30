import React from "react";
import { styled } from "@mui/material/styles";
import { Pagination, PaginationItem } from "@mui/material";

const PaginationNew = styled(Pagination)({
    backgroundColor: "#808080",
});

const PaginationItemNew = styled(PaginationItem)({
    boxShadow: "0px 0px 3px 3px #2F4F4F",
    border: "1px solid",
    backgroundColor: "#2E3B55",
    color: "#D8BFD8",
});

const CustomPagination = (props) => {
    const { sx, count, variant, shape, onChange, size, defaultPage } = props;
    return (
        <PaginationNew
            sx={sx}
            count={count}
            variant={variant}
            shape={shape}
            showFirstButton
            showLastButton
            onChange={onChange}
            size={size}
            renderItem={(item) => <PaginationItemNew {...item} />}
            defaultPage={defaultPage}
        />
    );
};

export { CustomPagination };

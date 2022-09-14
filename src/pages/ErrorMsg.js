import React from 'react';
import {StyledErrorMsg} from "../components/styles/ErrorMsg.styled";

const ErrorMsg = () => {
    return (
        <StyledErrorMsg>
            <h2>No Cocktails Found</h2>
        </StyledErrorMsg>
    );
};

export default ErrorMsg;
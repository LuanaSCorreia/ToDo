import React from "react";
import styled from "styled-components";

const Div = styled.div`
width: 100%;
height: 100vh;
position: absolute;
top: 0;
left: 0;
`

const ModalMenu = ({ id = 'modal', onClose = () => { }, children }) => {
    const clickFora = (e) => {
        if (e.target.id === id) onClose();
    };

    return (
        <Div id={id} onClick={clickFora}>
            <div>
                <div>{children}</div>
            </div>
        </Div>
    );
};

export default ModalMenu;
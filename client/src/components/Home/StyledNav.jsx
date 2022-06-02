import styled from "styled-components";

export const NavContainer = styled.nav`

    .img {
        width: 190px;
        margin-left: 10px;
    }

    .navbtn {
    border-radius: 8px;
    height: 35px;
    width: 120px;
    border: none;
    margin: 13px;
    color: rgb(255, 255, 255);
    background-color: rgb(255, 55, 0);
    border: 2px solid black;
}
.navbtn:hover{cursor: pointer; background-color: #000000d5;}

    .elements {
        display: flex;
        background-color: #000000d5;
        height: 80px;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 1200px) {
        .elements {
            width: 100%;
            height: 570px;
            display: grid;
            text-align: center;
            justify-content: center;
            align-items: center;
        }

        .img {
            width: 300px;
        }

}
`


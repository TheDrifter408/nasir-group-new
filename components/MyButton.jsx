'use client';

import styled from "styled-components";

export const MyButton = ({text,type,...props }) => {
    return(
        <StyledButton {...props} type={type}>
            <p className="btn-text">{text}</p>
            <div className="arrow-ctn">
            <svg xmlns="http://www.w3.org/2000/svg" width="11.207" height="11.414" viewBox="0 0 11.207 11.414">
  <g id="Group_4824" data-name="Group 4824" transform="translate(0.5 0.707)">
    <g id="Group_4823" data-name="Group 4823" transform="translate(5)">
      <line id="Line_9" data-name="Line 9" x2="5" y2="5" fill="current" stroke="#0a0e12" stroke-linecap="round" stroke-width="1"/>
      <line id="Line_10" data-name="Line 10" x1="5" y2="5" transform="translate(0 5)" fill="current" stroke="#0a0e12" stroke-linecap="round" stroke-width="1"/>
    </g>
    <line id="Line_11" data-name="Line 11" x2="10" transform="translate(0 5)" fill="current" stroke="#0a0e12" stroke-linecap="round" stroke-width="1"/>
  </g>
</svg>

            </div>
        </StyledButton>
    )
}

const StyledButton = styled.button`
    border:none;
    background-color:${ props => props.bgBlue ? '#00167D' : 'white' };
    color:${ props => props.fontWhite ? 'white' : 'black'};
    padding: 0.5rem 0.625rem;
    flex-grow:0;
    display:flex;
    gap:10px;
    align-items: center;
    justify-content: space-between;
    max-width:fit-content;
    .btn-text {
        font-size:1rem;
    }
    .arrow-ctn svg {
        width:100%;
        transform:rotate(-45deg);
        transition: transform 300ms ease-in-out;
        stroke: #FFF;
    }
    &:hover {
        .arrow-ctn svg {
            transform: rotate(0deg);
        }
    }
`
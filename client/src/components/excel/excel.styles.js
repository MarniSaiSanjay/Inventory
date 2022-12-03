import styled, { css } from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 0.9rem;

  .inputfile::file-selector-button {
    font-weight: bold;
    color: dodgerblue;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: thin solid grey;
    border-radius: 6px;
  }
`;

export const Button = styled.button`
  border-radius: 6px;
  padding: 0.5rem 3rem;
  font-family: inherit;
  font-size: 1.1rem;
  cursor: pointer;
  color: white;
  border: none;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;

  ${(props) =>
    props.submitButton &&
    css`
      background: #0069d9;
      padding: 0.5rem 1.4rem;
      transition: all 0.5s ease;

      &:hover {
        opacity: 0.9;
        transform: scale(1.01);
      }
    `}
`;

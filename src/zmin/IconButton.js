import styled,{css} from "styled-components";

const IconBox = styled.div`
  width: 1.25rem;
  display:flex;
  justify-content: center;
  align-content: center;
  padding:8px;
  margin:-8px;
  border-radius: 9999px;
  
  transition-property: background-color;
  transition-duration: 0.2s;  
  svg {
    transition-property: fill;
    transition-duration: 0.2s;
  };
  
  ${ props => {
      if(props.float){
        return css`
          position: absolute;
          top: 1px;
          right:0px;
        `;
      }
      else {
        return css`
          position: static;
        `;
      }
    }
  };
  
  ${ props => {
      if (props.customColor === 'red'){
        return css`
          &:hover {
            background-color: rgba(249, 24, 128, 0.1);
          };
          &:hover svg{
            fill: rgb(249, 24, 128);
          };
        `
      } 
      else if (props.customColor === 'green'){
        return css`
          &:hover {
            background-color: rgba(0, 186, 124, 0.1);
          };
          &:hover svg{
            fill: rgb(0, 186, 124);
          };
        `
      }
      else {
        return css`
          &:hover {
            background-color: rgba(29, 155, 240, 0.1);
          };
          &:hover svg{
            fill: rgb(29, 155, 240);
          };
        `
      }
    }
  };
`;

const IconButton = ({float, customColor, onClick, children}) => {
  return (
    <IconBox onClick={onClick} float={float} customColor={customColor} >
      {children}
    </IconBox>
  );
};

export default IconButton;

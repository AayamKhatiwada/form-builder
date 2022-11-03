import styled from 'styled-components';

export const DragBox = styled.span`
  width: 250px;
  height: 100px;
  margin: 0 auto;
  position: relative;
  text-align: center;
  font-weight: bold;
  line-height: 95px;
  color: white;
  border: 2px dashed #ccc;
  display: inline-block;
  transition: transform 0.3s;
  input[type="file"] {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    top: 0;
    left: 0;
  }
`
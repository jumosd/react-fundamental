import styled from 'styled-components'

export const NewsItemWrapper = styled.div`
  width: 1200px;
  margin: 50px auto;
  padding: 6px;
  border: 1px solid gray;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  
  .image {
    width: 500px;
    height: auto;
  }
  
  .content {
    display: flex;
  }
  
  h1 {
    color: blue;
  }
  
  h3 {
    color: darkgreen;
  }
`

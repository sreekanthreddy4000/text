import styled from 'styled-components'

export const Container = styled.div`
    background-color:#25262c;
    height:100vh;
    background-size:cover;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export const ButtonContainer = styled.div`
    display:flex;
    background-color:#1b1c22;
    width:80%;
    height:70vh;
`

export const ImageContainer = styled.div`
    display:flex;
    flex-direction:column; 
`

export const MainHeading = styled.h1`
    color:#ffffff;
    font-family:"Roboto"
    font-ize:20px;
    padding:15px;
`

export const Image = styled.img`
    height:150px;
    width:150px;
    margin-left:20px;
    margin-top:15px;
`

export const ButtonsList = styled.ul`
    display:flex;
    flex-direction:column;
    background-color: #25262c;
    margin:5px;
    width:40%;
    height:60vh;
    list-style-type:none;
`

export const Button = styled.button`
    color:background-color: ${({isActive}) =>
      isActive ? '#faff00' : '#f1f5f9'};
    border: none;
    padding: 5px;
    margin-right: 10px;
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  font-size: 16px;
`
export const Hr = styled.hr`
    border:1px solid #ffffff;
    width:100%;
`

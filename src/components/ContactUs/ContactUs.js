import React, {useState} from 'react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ContactSection,
        Form,
        ContainerLeft,
        Title,
        LeftContent,
        Input,
        ContainerRight,
        RightContent,
        TextArea,
        ButtonArea,
        Button} from './ContactUsStyled';


const ContactUs = () => {

    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [company, setCompany] = useState();
    const [msg, setMsg] = useState();
    const [loader, setLoader] = useState(false);

    const toastMsg = () => toast.info('You successfully send message to us!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
        });

    const handleSubmit = (e) => {
        e.preventDefault();



        setName('');
        setLastname('');
        setEmail('');
        setCompany('');
        setMsg('');
    }

    return (
        <>
            <ContactSection>
                <Form onSubmit={handleSubmit}>
                    <ContainerLeft>
                        <Title>Contact us</Title>
                        <LeftContent>
                            <Input placeholder="First Name*" name="name" autoComplete="off" value={name} onChange={(e)=>setName(e.target.value)}/>
                            <Input placeholder="Last Name*" name="lastname" autoComplete="off" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                            <Input placeholder="Email*" name="email" autoComplete="off" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            <Input placeholder="Company*" name="company" autoComplete="off" value={company} onChange={(e)=>setCompany(e.target.value)}/>
                        </LeftContent>
                    </ContainerLeft>
                    <ContainerRight>
                        <RightContent>
                            <TextArea placeholder="What can we do for you?*" autoComplete="off" name="msg" value={msg} onChange={(e)=>setMsg(e.target.value)}/>
                            <ButtonArea>
                                <Button type="submit" style={{background: loader ? "#ccc" : "#0F72E5", color: loader ? "#4d4d4d" : "#fff"}}>Send</Button>
                            </ButtonArea>
                        </RightContent>
                    </ContainerRight>
                    <ToastContainer />
                </Form>
            </ContactSection>
        </>
    )
}

export default ContactUs

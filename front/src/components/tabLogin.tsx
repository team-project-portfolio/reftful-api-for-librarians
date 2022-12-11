import React, { useState } from 'react';
import styled from 'styled-components';
import { LoginBox, TabBox, ContentBox } from '../utils/styled';
import { Tab } from '../utils/styled';
import Login from './Login';
import SignUp from './SignUp';

const Container = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
`


const TabLogin = () => {

    const [value, setValue] = useState(0);
    const onClick = (tab: number) => {
        setValue(tab);
    }

    const tabs = [
        {
            name: "로그인",
            content: <Login />
        },
        {
            name: "회원가입",
            content: <SignUp  setValue={setValue}/>
        },
    ]

    return (
        <Container>
            <LoginBox>
                <TabBox >
                    {tabs.map((tab, i) => {
                        return <Tab
                            key={`${tab.name}-${i}`}
                            onClick={() => { onClick(i) }}
                            active={i === value}>
                            <p>{tab.name}</p></Tab>
                    })
                    }
                </TabBox>
                <ContentBox>
                    {tabs[value].content}
                </ContentBox>
            </LoginBox>
        </Container>
    )
}

export default TabLogin;
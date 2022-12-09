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
    const tabs = ["로그인", "회원가입"];
    const onClick = (tab: number) => {
        setValue(tab);
    }

    const data = [
        {
            menu: "로그인",
            content: <Login/>
        },
        {
            menu: "회원가입",
            content: <SignUp/>
        },

    ]

    return (
        <Container>
            <LoginBox>
                <TabBox >
                    {tabs.map((tab, i) => {
                        return <Tab
                            key={`${tab}-${i}`}
                            onClick={() => { onClick(i) }}
                            active={i === value}>
                            <p>{tab}</p></Tab>
                    })
                    }
                </TabBox>
                <ContentBox>
                    {data[value].content}
                </ContentBox>
            </LoginBox>
        </Container>
    )
}

export default TabLogin;
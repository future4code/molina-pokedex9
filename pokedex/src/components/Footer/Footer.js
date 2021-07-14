import React from 'react'
import { SocialMidia, IconSocial, Title, FooterContainer, Direitos, Text } from './styled'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <FooterContainer>
            <SocialMidia>
                {/* <Title>Redes Socias</Title> */}
                {/* <IconSocial>
                    <Link target="_blank" href="https://www.instagram.com/">
                        <img src="https://image.flaticon.com/icons/png/512/1384/1384015.png" />                        
                    </Link>
                    <Link target="_blank" href="https://www.facebook.com/">
                        <img src="https://image.flaticon.com/icons/png/512/1384/1384005.png" />
                    </Link>
                    <Link target="_blank" href="https://www.twitter.com/">
                        <img src="https://image.flaticon.com/icons/png/512/733/733635.png" />
                    </Link>
                    <Link target="_blank" href="https://www.youtube.com/">
                        <img src="https://image.flaticon.com/icons/png/512/1384/1384028.png" />
                    </Link>
                </IconSocial> */}
                <Direitos>
                    <Text>
                        © Copyright 2021 - Todos os direitos reservados a Carlos, Ederson, Robson e Sidnei
                    </Text>
                </Direitos>
            </SocialMidia>
        </FooterContainer>
    )
}

export default Footer
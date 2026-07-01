import styled from 'styled-components'
import { FiLinkedin, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import LogoTitle from './LogoTitle'

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Grid>
          <Brand>
            <LogoTitle />
            <Description>
              Consultoria especializada em gestão financeira empresarial.
              Transformando desafios em resultados.
            </Description>
          </Brand>

          <Links>
            <FooterTitle>Links Rápidos</FooterTitle>
            <LinkList>
              {['Início', 'Sobre', 'Depoimentos', 'Contate-nos'].map(
                (item) => (
                  <FooterLink key={item} href={`#${item
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')}`}
                  >
                    {item}
                  </FooterLink>
                )
              )}
            </LinkList>
          </Links>

          <Social>
            <FooterTitle>Redes Sociais</FooterTitle>
            <SocialIcons>
              <SocialIcon href="https://www.linkedin.com/company/ludoconsultoria/" aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/ludo_consultoria/" aria-label="Instagram">
                <FiInstagram size={20} />
              </SocialIcon>
              <SocialIcon href="https://wa.me/5547997262990" aria-label="WhatsApp">
                <FaWhatsapp size={20} />
              </SocialIcon>
            </SocialIcons>
          </Social>
        </Grid>

        <Divider />
        <Copyright>
          &copy; {new Date().getFullYear()} LUDO Consultoria Especializada. Todos os
          direitos reservados.
        </Copyright>
      </Container>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background: #0d2e38;
  color: #FFFFFF;
  padding: 4rem 0 2rem;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const Brand = styled.div``

const Description = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
`

const Links = styled.div``

const FooterTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: #e7c37a;
  margin-bottom: 1.5rem;
`

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`

const FooterLink = styled.a`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.3s ease;

  &:hover {
    color: #e7c37a;
  }
`

const Social = styled.div``

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: #e7c37a;
    color: #000000;
  }
`

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 2rem 0;
`

const Copyright = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
`

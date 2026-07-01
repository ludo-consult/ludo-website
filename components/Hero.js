import styled from 'styled-components'
import Logo from './Logo.js'

export default function Hero() {
  return (
    <Section id="inicio">
      <Banner>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </Banner>
      <Content>
        <Title>Gestão Financeira Inteligente para o Seu Negócio</Title>
        <Subtitle>
          Transformamos desafios financeiros em oportunidades de crescimento.
          Soluções sob medida para empresas que buscam resultados sólidos.
        </Subtitle>
        <CTA href="#contate-nos">Solicite uma Consultoria</CTA>
      </Content>
    </Section>
  )
}

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(36, 93, 112);
  overflow: hidden;
`

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 2rem 4rem;
  text-align: center;
`

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  margin: 5rem 0 0 0;
  background: rgba(231, 195, 122, .15);
  width: 90%;
  border-radius: 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`

const LogoWrapper = styled.span`
  display: flex;
  width: 50%;
  height: auto;

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.2;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const CTA = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: #e7c37a;
  color: #000000;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 50px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: #d4ae5f;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(231, 195, 122, 0.3);
  }
`

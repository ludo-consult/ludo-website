import styled from 'styled-components'
import { FiTarget, FiEye, FiHeart } from 'react-icons/fi'

const ITEMS = [
  {
    icon: <FiTarget size={32} />,
    title: 'Missão',
    text: 'Descomplicar a gestão financeira de forma inteligente, entregando a tranquilidade e a previsibilidade que os empreendedores precisam para prosperar.',
  },
  {
    icon: <FiEye size={32} />,
    title: 'Visão',
    text: 'Ser referência nacional em serviços de gestão financeira, reconhecida pela qualidade e pelo impacto positivo nos resultados dos nossos clientes.',
  },
  {
    icon: <FiHeart size={32} />,
    title: 'Valores',
    text: 'Ética, transparência, compromisso com resultados e parceria genuína com cada cliente, tratando cada desafio como nosso.',
  },
]

const DIFFERENTIALS = [
  {
    title: 'Foco no seu Core Business',
    text: 'Deixe a burocracia financeira conosco e ganhe tempo para focar na estratégia e na operação da sua empresa.',
  },
  {
    title: 'Segurança e Organização',
    text: 'Processos padronizados e estruturados com as melhores práticas e ferramentas do mercado.',
  },
  {
    title: 'Visão Estratégica',
    text: 'Relatórios e indicadores claros que funcionam como uma verdadeira bússola para o seu crescimento.',
  },
  {
    title: 'Praticidade',
    text: 'Uma equipe de especialistas cuidando do seu financeiro, sem os custos de uma contratação interna.',
  },
]

export default function About() {
  return (
    <Section id="sobre">
      <Container>
        <Header>
          <Tag>Sobre Nós</Tag>
          <Title>Conheça a LUDO</Title>
          <Description>
            Somos uma empresa especializada em terceirização financeira (BPO Financeiro), dedicada a organizar, estruturar e otimizar a gestão financeira de negócios de forma prática, segura e estratégica.
            <br />
            <br />
            Assumimos toda a rotina operacional da sua empresa para que você possa focar no que realmente importa: o crescimento do seu negócio. Mais do que executar tarefas, nós transformamos dados brutos em informações confiáveis e inteligência de mercado, gerando clareza para tomadas de decisão mais assertivas e lucrativas.
          </Description>
        </Header>

        <Grid>
          {ITEMS.map(({ icon, title, text }) => (
            <Card key={title}>
              <IconWrapper>{icon}</IconWrapper>
              <CardTitle>{title}</CardTitle>
              <CardText>{text}</CardText>
            </Card>
          ))}
        </Grid>

        <DifferentialsSection>
          <DiffTitle>Por que escolher a nossa solução?</DiffTitle>
          <DiffGrid>
            {DIFFERENTIALS.map(({ title, text }) => (
              <DiffCard key={title}>
                <DiffCardTitle>{title}</DiffCardTitle>
                <DiffCardText>{text}</DiffCardText>
              </DiffCard>
            ))}
          </DiffGrid>
        </DifferentialsSection>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding: 6rem 0;
  background: #f8f9fa;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`

const Tag = styled.span`
  display: inline-block;
  padding: 0.4rem 1.2rem;
  background: rgba(231, 195, 122, 0.15);
  color: #245d70;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: #245d70;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  background: #FFFFFF;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }
`

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: rgba(231, 195, 122, 0.15);
  border-radius: 16px;
  color: #245d70;
  margin-bottom: 1.5rem;
`

const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #245d70;
  margin-bottom: 1rem;
`

const CardText = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.7;
`

const DifferentialsSection = styled.div`
  margin-top: 5rem;
`

const DiffTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #245d70;
  text-align: center;
  margin-bottom: 2rem;
`

const DiffGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const DiffCard = styled.div`
  padding: 1.5rem;
  background: #FFFFFF;
  border-radius: 12px;
  border-left: 4px solid #e7c37a;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }
`

const DiffCardTitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: #245d70;
  margin-bottom: 0.5rem;
`

const DiffCardText = styled.p`
  font-size: 0.9rem;
  color: #555;
  line-height: 1.6;
`

import styled from 'styled-components'
import { FiTarget, FiEye, FiHeart } from 'react-icons/fi'

const ITEMS = [
  {
    icon: <FiTarget size={32} />,
    title: 'Missão',
    text: 'Oferecer consultoria financeira de excelência, capacitando empresas a alcançarem estabilidade e crescimento sustentável por meio de estratégias inovadoras e personalizadas.',
  },
  {
    icon: <FiEye size={32} />,
    title: 'Visão',
    text: 'Ser referência nacional em consultoria de gestão financeira, reconhecida pela qualidade dos serviços e pelo impacto positivo nos resultados dos nossos clientes.',
  },
  {
    icon: <FiHeart size={32} />,
    title: 'Valores',
    text: 'Ética, transparência, compromisso com resultados, inovação constante e parceria genuína com cada cliente, tratando cada desafio como nosso.',
  },
]

const DIFFERENTIALS = [
  'Análise financeira completa e personalizada',
  'Redução comprovada de custos operacionais',
  'Planejamento tributário estratégico',
  'Relatórios gerenciais em tempo real',
]

export default function About() {
  return (
    <Section id="sobre">
      <Container>
        <Header>
          <Tag>Sobre Nós</Tag>
          <Title>Conheça a LUDO Consultoria</Title>
          <Description>
            Somos uma equipe de especialistas apaixonados por finanças empresariais.
            Há mais de 10 anos ajudamos empresas de todos os portes a organizar suas
            finanças, reduzir custos e maximizar resultados com soluções inteligentes
            e personalizadas.
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
          <DiffTitle>Nossos Diferenciais</DiffTitle>
          <DiffGrid>
            {DIFFERENTIALS.map((diff) => (
              <DiffCard key={diff}>{diff}</DiffCard>
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
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: #245d70;
  border-left: 4px solid #e7c37a;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

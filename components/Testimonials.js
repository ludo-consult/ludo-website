import styled from 'styled-components'
import { FiStar } from 'react-icons/fi'

const TESTIMONIALS = [
  {
    name: 'Carlos Mendes',
    role: 'CEO, TechSolutions Ltda',
    text: 'A LUDO transformou a saúde financeira da nossa empresa. Em apenas seis meses, conseguimos reduzir custos operacionais em 25% e aumentar nossa margem de lucro significativamente. Profissionalismo e competência acima da média.',
    rating: 5,
  },
  {
    name: 'Ana Beatriz Oliveira',
    role: 'Diretora Financeira, Grupo Nova Era',
    text: 'Contratamos a LUDO para reestruturar nosso departamento financeiro e o resultado superou todas as expectativas. A equipe é extremamente capacitada e comprometida com resultados reais.',
    rating: 5,
  },
  {
    name: 'Roberto Almeida',
    role: 'Sócio-Proprietário, Almeida & Cia',
    text: 'Reduzimos custos em 30% com a consultoria da LUDO. O planejamento tributário que eles implementaram nos economizou mais do que imaginávamos. Recomendo de olhos fechados!',
    rating: 5,
  },
]

function Stars({ count }) {
  return (
    <StarRow>
      {Array.from({ length: count }, (_, i) => (
        <FiStar key={i} size={18} fill="#e7c37a" />
      ))}
    </StarRow>
  )
}

export default function Testimonials() {
  return (
    <Section id="depoimentos">
      <Container>
        <Header>
          <Tag>Depoimentos</Tag>
          <Title>O Que Nossos Clientes Dizem</Title>
          <Description>
            A satisfação dos nossos clientes é o nosso maior patrimônio. Veja o que
            eles têm a dizer sobre a experiência com a LUDO Consultoria.
          </Description>
        </Header>

        <Grid>
          {TESTIMONIALS.map(({ name, role, text, rating }) => (
            <Card key={name}>
              <Stars count={rating} />
              <Quote>&ldquo;{text}&rdquo;</Quote>
              <AuthorInfo>
                <Avatar>{name.charAt(0)}</Avatar>
                <div>
                  <Name>{name}</Name>
                  <Role>{role}</Role>
                </div>
              </AuthorInfo>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding: 6rem 0;
  background: #FFFFFF;
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
    max-width: 500px;
    margin: 0 auto;
  }
`

const Card = styled.div`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }
`

const StarRow = styled.div`
  display: flex;
  gap: 2px;
  margin-bottom: 1.5rem;
  color: #e7c37a;
`

const Quote = styled.p`
  font-size: 0.95rem;
  color: #444;
  line-height: 1.8;
  font-style: italic;
  margin-bottom: 1.5rem;
  flex: 1;
`

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #245d70;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  flex-shrink: 0;
`

const Name = styled.p`
  font-weight: 700;
  color: #245d70;
  font-size: 1rem;
`

const Role = styled.p`
  font-size: 0.85rem;
  color: #777;
`

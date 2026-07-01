import styled from 'styled-components'
import { FiStar } from 'react-icons/fi'

const TESTIMONIALS = [
  // {
  //   name: 'Carlos Mendes',
  //   role: 'CEO, TechSolutions Ltda',
  //   text: 'A LUDO transformou a saúde financeira da nossa empresa. Em apenas seis meses, conseguimos reduzir custos operacionais em 25% e aumentar nossa margem de lucro significativamente. Profissionalismo e competência acima da média.',
  //   rating: 5,
  //   avatar: '/carlos-mendes.jpg',
  // },
  {
    name: 'Jessica Martins',
    role: 'CEO, People Academy',
    text: 'Encontrar a Lu foi um grande presente. Ainda não havia tido uma pessoa que cuidasse desta forma das finanças do negócio e eu não tinha dimensão do quão libertador seria poder confiar essa rotina a alguém. Como empreendedora, tenho múltiplos papéis e poder ter uma empresa que seja parceira é muito importante para nos dar tranquilidade. Indico de olhos fechados. Nunca tivemos nenhum problema, pelo contrário, ela me traz frequentemente, soluções para os meus desafios.',
    rating: 5,
    avatar: '/jessica-martins.jpeg',
  },
  {
    name: 'Tiago Nascimento',
    role: 'CEO, Don Edu - Delícias sem glutén',
    text: `A Ludo, mais propriamente falando da Luiza, entrou para cuidar da nossa gestão financeira, ganhamos muito mais do que uma prestadora de serviços. Ganhamos organização, clareza e tranquilidade para tomar decisões.
          Ter alguém que olha para os números com responsabilidade, estratégia e comprometimento faz toda a diferença no dia a dia de uma empresa. Hoje conseguimos enxergar melhor nossos resultados, planejar com mais segurança e direcionar nossos esforços para aquilo que realmente importa: fazer o nosso negócio crescer.
          A Luiza conduz tudo com muita competência, atenção aos detalhes e profissionalismo, sempre disposta a orientar e encontrar as melhores soluções. É o tipo de parceria que gera confiança e nos permite focar na operação, sabendo que a parte financeira está em excelentes mãos.
          Somos muito gratos por essa caminhada ao lado da Ludo. Sem dúvida, foi uma das melhores decisões que tomamos para fortalecer a gestão da nossa empresa. Recomendo de olhos fechados para qualquer empresário que queira ter mais controle, organização e segurança financeira.`,
    rating: 5,
    avatar: '/tiago-nascimento.jpeg',
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
            eles têm a dizer sobre a experiência com a LUDO.
          </Description>
        </Header>

        <Grid>
          {TESTIMONIALS.map(({ name, role, text, rating, avatar }) => (
            <Card key={name}>
              <Stars count={rating} />
              <Quote>&ldquo;{text}&rdquo;</Quote>
              <AuthorInfo>
                <Avatar>
                  {avatar ? <Img src={avatar} alt={name} /> : name.charAt(0)}
                </Avatar>
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
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
  overflow: hidden;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

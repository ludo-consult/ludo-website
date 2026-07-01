'use client'

import { useState } from 'react'
import styled from 'styled-components'
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = '5547997262990'
const INITIAL_STATE = { nome: '', email: '', telefone: '', mensagem: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL_STATE)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error()

      setSubmitted(true)
      setForm(INITIAL_STATE)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const handleWhatsApp = () => {
    const msg = 'Olá! Gostaria de saber mais sobre a consultoria financeira da LUDO.'
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      '_blank'
    )
  }

  return (
    <Section id="contate-nos">
      <Container>
        <Header>
          <Tag>Contate-nos</Tag>
          <Title>Vamos Conversar?</Title>
          <Description>
            Estamos prontos para ajudar sua empresa a alcançar a excelência financeira.
            Entre em contato e agende uma reunião gratuita.
          </Description>
        </Header>

        <ContentGrid>
          <Form onSubmit={handleSubmit}>
            <Input
              name="nome"
              placeholder="Seu nome"
              value={form.nome}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Seu e-mail"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Input
              name="telefone"
              type="tel"
              placeholder="Seu telefone"
              value={form.telefone}
              onChange={handleChange}
              required
            />
            <TextArea
              name="mensagem"
              placeholder="Sua mensagem"
              rows={5}
              value={form.mensagem}
              onChange={handleChange}
              required
            />
            <ButtonRow>
              <SubmitButton type="submit" disabled={loading}>
                <FiSend size={18} />
                {loading ? 'Enviando...' : 'Enviar Mensagem'}
              </SubmitButton>
              <WhatsAppButton type="button" onClick={handleWhatsApp}>
                <FaWhatsapp size={18} />
                Fale pelo WhatsApp
              </WhatsAppButton>
            </ButtonRow>
            {submitted && (
              <SuccessMessage>
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </SuccessMessage>
            )}
            {error && (
              <ErrorMessage>
                Ocorreu um erro ao enviar a mensagem. Tente novamente ou fale conosco pelo WhatsApp.
              </ErrorMessage>
            )}
          </Form>

          <Info>
            <InfoTitle>Informações de Contato</InfoTitle>
            <InfoList>
              <InfoItem>
                <InfoIcon>
                  <FiPhone size={20} />
                </InfoIcon>
                <div>
                  <InfoLabel>Telefone</InfoLabel>
                  <InfoValue>(47) 99726-2990</InfoValue>
                </div>
              </InfoItem>
              <InfoItem>
                <InfoIcon>
                  <FiMail size={20} />
                </InfoIcon>
                <div>
                  <InfoLabel>E-mail</InfoLabel>
                  <InfoValue>contato.ludoconsultoria@gmail.com</InfoValue>
                </div>
              </InfoItem>
              <InfoItem>
                <InfoIcon>
                  <FiMapPin size={20} />
                </InfoIcon>
                <div>
                  <InfoLabel>Endereço</InfoLabel>
                  <InfoValue>
                    Joinville - SC
                  </InfoValue>
                </div>
              </InfoItem>
            </InfoList>
          </Info>
        </ContentGrid>
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Input = styled.input`
  padding: 1rem 1.2rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  color: #000000;
  background: #FFFFFF;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #245d70;
  }

  &::placeholder {
    color: #aaa;
  }
`

const TextArea = styled.textarea`
  padding: 1rem 1.2rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  color: #000000;
  background: #FFFFFF;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #245d70;
  }

  &::placeholder {
    color: #aaa;
  }
`

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #245d70;
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 8px;
  transition: background 0.3s ease, transform 0.3s ease;
  flex: 1;

  &:hover:not(:disabled) {
    background: #1a4a5a;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

const WhatsAppButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #25D366;
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 8px;
  transition: background 0.3s ease, transform 0.3s ease;
  flex: 1;

  &:hover {
    background: #1ebe5a;
    transform: translateY(-2px);
  }
`

const SuccessMessage = styled.p`
  color: #2e7d32;
  font-size: 0.95rem;
  font-weight: 500;
  text-align: center;
  padding: 0.75rem;
  background: rgba(46, 125, 50, 0.08);
  border-radius: 8px;
`

const ErrorMessage = styled.p`
  color: #c62828;
  font-size: 0.95rem;
  font-weight: 500;
  text-align: center;
  padding: 0.75rem;
  background: rgba(198, 40, 40, 0.08);
  border-radius: 8px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #245d70;
  margin-bottom: 2rem;
`

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`

const InfoIcon = styled.div`
  width: 48px;
  height: 48px;
  background: rgba(231, 195, 122, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #245d70;
  flex-shrink: 0;
`

const WAIcon = styled(InfoIcon)`
  background: rgba(37, 211, 102, 0.12);
  color: #25D366;
`

const WALink = styled.a`
  color: #25D366;
  font-weight: 600;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`

const InfoLabel = styled.p`
  font-size: 0.85rem;
  color: #888;
  font-weight: 500;
  margin-bottom: 0.25rem;
`

const InfoValue = styled.p`
  font-size: 1rem;
  color: #000000;
  font-weight: 500;
  line-height: 1.5;
`

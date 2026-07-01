import styled from 'styled-components'

export default function LogoTitle({ $dark = false }) {
  return <Text $dark={$dark}>LUDO</Text>
}

const Text = styled.span`
  font-family: 'Ludo', serif;
  font-size: 2rem;
  font-weight: 400;
  color: ${({ $dark }) => ($dark ? '#000000' : '#FFFFFF')};
  letter-spacing: 3px;
  line-height: 1;
`
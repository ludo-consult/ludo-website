import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyles from '@/styles/GlobalStyles'

export const metadata = {
  title: 'LUDO Consultoria Especializada',
  description:
    'Consultoria especializada em gestão financeira empresarial. Soluções em planejamento financeiro, redução de custos e otimização de resultados.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

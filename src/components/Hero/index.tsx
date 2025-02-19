import { Form, HeroTitle } from './Hero.module'

type Props = {
  trocaTema: () => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Hero = (_props: Props) => (
  <Form>
    <div className="container">
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </div>
  </Form>
)

export default Hero

interface skillsT {
  /** Nome da habilidade */
  name: string
  /** Cor da habilidade */
  color: string
  /** Porcentagem da habilidade */
  percentage: number
  /** Arquivo da ilustração */
  file?: string
}

// ----

export const skills: skillsT[] = [
  {
    name: 'Apache',
    color: '#e22',
    percentage: 78,
    file: 'apache.svg'
  },
  {
    name: 'JUnit',
    color: '#b22',
    percentage: 45,
    file: 'JUnit.svg'
  },
  {
    name: 'Postman',
    color: 'darkorange',
    percentage: 64,
    file: 'postman.svg'
  },
  {
    name: 'Cypress',
    color: '#111',
    percentage: 85,
    file: 'cypress.svg'
  },
  {
    name: 'Cucumber',
    color: '#2a0',
    percentage: 70,
    file: 'cucumber.svg'
  }
]

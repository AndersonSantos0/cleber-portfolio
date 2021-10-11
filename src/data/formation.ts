interface formationT {
  /** Nome da formação */
  name: string
  /** Descrição da formação */
  description: string
  /** Data da formação */
  date: string
  /** Arquivo da ilustração */
  file?: string
}

// ----

export const formations: formationT[] = [
  {
    name: 'UNIP',
    description: 'analise e desenvolvimento de sistemas',
    date: '2021-2023',
    file: 'UNIP.png'
  },
  {
    name: 'UNIP',
    description: 'analise e desenvolvimento de sistemas',
    date: '2021-2023'
  }
]

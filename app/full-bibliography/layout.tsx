import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Complete Bibliography | Dr. Dobri Kiprov, M.D.',
  description:
    'Complete publications by Dr. Dobri Kiprov - 93 peer-reviewed papers on therapeutic apheresis, biological aging, Alzheimer\'s disease, COVID-19, and autoimmune conditions.',
}

export default function BibliographyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

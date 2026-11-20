/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Sanity Schemas for Embarque Portal
 * Studio: https://embarque-viagem.sanity.studio/
 * Dataset: production
 */

export const destinationSchema = {
  name: 'destination',
  title: 'Destino',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nome do Destino', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }, validation: (Rule: any) => Rule.required() },
    { name: 'state', title: 'Estado (ex: SC, RJ)', type: 'string' },
    { name: 'region', title: 'Região Turística (ex: Costa Esmeralda, Região dos Lagos)', type: 'string' },
    {
      name: 'tagline',
      title: 'Frase Editorial de Impacto (Multilíngue)',
      type: 'object',
      fields: [
        { name: 'pt', title: 'Português', type: 'string' },
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    },
    {
      name: 'description',
      title: 'Apresentação Editorial',
      type: 'object',
      fields: [
        { name: 'pt', title: 'Português', type: 'text' },
        { name: 'es', title: 'Español', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
      ],
    },
    { name: 'heroImage', title: 'Fotografia de Destaque', type: 'image', options: { hotspot: true } },
    { name: 'gallery', title: 'Galeria Fotográfica', type: 'array', of: [{ type: 'image' }] },
    {
      name: 'costProfile',
      title: 'Perfil de Custos Médios',
      type: 'object',
      fields: [
        { name: 'dailyAverageBRL', title: 'Custo Médio Diário (R$)', type: 'number' },
        {
          name: 'tier',
          title: 'Classificação de Padrão',
          type: 'string',
          options: { list: ['economico', 'moderado', 'alto_padrao', 'luxo'] },
        },
      ],
    },
    { name: 'featured', title: 'Destino em Destaque na Home?', type: 'boolean' },
    {
      name: 'priorityRegion',
      title: 'Região Prioritária',
      type: 'string',
      options: { list: ['santa_catarina', 'rio_de_janeiro', 'outros'] },
    },
  ],
};

export const articleSchema = {
  name: 'article',
  title: 'Artigo ou Guia Editorial',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título (Multilíngue)',
      type: 'object',
      fields: [
        { name: 'pt', title: 'Português (pt-BR)', type: 'string' },
        { name: 'es', title: 'Español (es-419)', type: 'string' },
        { name: 'en', title: 'English (en-US)', type: 'string' },
      ],
    },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title.pt' } },
    {
      name: 'subtitle',
      title: 'Subtítulo / Linha de Apoio',
      type: 'object',
      fields: [
        { name: 'pt', title: 'Português (pt-BR)', type: 'text' },
        { name: 'es', title: 'Español (es-419)', type: 'text' },
        { name: 'en', title: 'English (en-US)', type: 'text' },
      ],
    },
    { name: 'coverImage', title: 'Fotografia ou Composição de Capa', type: 'image', options: { hotspot: true } },
    {
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: { list: ['guias', 'praias', 'roteiros', 'gastronomia', 'dicas'] },
    },
    { name: 'author', title: 'Autor', type: 'reference', to: [{ type: 'author' }] },
    { name: 'reviewer', title: 'Revisor Editorial', type: 'reference', to: [{ type: 'author' }] },
    { name: 'destination', title: 'Destino Vinculado (Opcional)', type: 'reference', to: [{ type: 'destination' }] },
    { name: 'publishedAt', title: 'Data de Publicação', type: 'date' },
    { name: 'updatedAt', title: 'Data de Atualização', type: 'date' },
    { name: 'readTimeMinutes', title: 'Tempo de Leitura (minutos)', type: 'number' },
    {
      name: 'seo',
      title: 'SEO Metadata',
      type: 'object',
      fields: [
        { name: 'primaryKeyword', title: 'Palavra-chave principal', type: 'string' },
        { name: 'seoTitlePt', title: 'Title SEO (pt-BR)', type: 'string' },
        { name: 'seoDescriptionPt', title: 'Meta Description (pt-BR)', type: 'text' },
      ],
    },
    { name: 'featured', title: 'Destaque Editorial?', type: 'boolean' },
  ],
};

export const authorSchema = {
  name: 'author',
  title: 'Autor / Editor',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nome Completo', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    { name: 'avatar', title: 'Foto de Perfil', type: 'image' },
    {
      name: 'role',
      title: 'Cargo / Função Editorial',
      type: 'object',
      fields: [
        { name: 'pt', title: 'Português', type: 'string' },
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    },
    {
      name: 'bio',
      title: 'Biografia Editorial',
      type: 'object',
      fields: [
        { name: 'pt', title: 'Português', type: 'text' },
        { name: 'es', title: 'Español', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
      ],
    },
    {
      name: 'socialLinks',
      title: 'Perfis Sociais Verificados',
      type: 'object',
      fields: [
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
      ],
    },
  ],
};

export const affiliatePartnerSchema = {
  name: 'affiliatePartner',
  title: 'Parceiro Comercial / Afiliado',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nome do Parceiro', type: 'string' },
    {
      name: 'category',
      title: 'Segmento',
      type: 'string',
      options: { list: ['hospedagem', 'passagens', 'seguro', 'veiculos', 'passeios', 'cruzeiros', 'pacotes'] },
    },
    { name: 'affiliateUrl', title: 'Link de Rastreamento / Afiliado', type: 'url' },
    { name: 'isSponsored', title: 'Identificar como Publicidade / Parceria?', type: 'boolean' },
  ],
};

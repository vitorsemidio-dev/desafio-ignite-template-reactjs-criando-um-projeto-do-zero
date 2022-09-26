# Testes pages/post/[slug].tsx

- **should be able to return prismic posts documents paths using getStaticPaths**
    
    Para que esse teste passe você deve retornar do `getStaticPaths` os dados do Prismic de acordo com as `interfaces` já disponibilizada no template. Obrigatório utilizar o método `query` do Prismic.
    
- **should be able to return prismic post document using getStaticProps**
    
    Para que esse teste passe você deve retornar do `getStaticProps` os dados do Prismic de acordo com as `interfaces` já disponibilizada no template. Obrigatório utilizar o método `getByUID` do Prismic.
    
- **should be able to render post document info**
    
    Para que esse teste passe você deve renderizar em tela o título, data de criação (já formatada), autor, tempo estimado de leitura (calculado por você) e conteúdo (`heading` e `body`) do post.
    
- **should be able to render loading message if fallback**
    
    Para que esse teste passe você deve renderizar em tela uma mensagem com o texto `Carregando...` caso o post não tenha sido gerado estaticamente e caia no `fallback`.
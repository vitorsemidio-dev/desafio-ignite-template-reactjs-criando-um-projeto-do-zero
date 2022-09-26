# Testes pages/Home/index.tsx

- **should be able to return prismic posts documents using getStaticProps**
    
    Para que esse teste passe você deve retornar do `getStaticProps` os dados do Prismic de acordo com as `interfaces` já disponibilizada no template. Obrigatório utilizar o método `query` do Prismic.
    
- **should be able to render posts documents info**
    
    Para que esse teste passe você deve renderizar em tela a listagem de posts com as informações de título, subtítulo, data de criação (já formatada) e autor do post.
    
- **should be able to navigate to post page after a click**
    
    Para que esse teste passe você deve navegar para a página do post clicado seguindo o padrão `/post/slugDoPost` onde `slugDoPost` é o valor `slug` de cada post retornado pelo Prismic
    
- **should be able to load more posts if available**
    
    Para que esse teste passe você deve renderizar em tela o botão com o valor `Carregar mais posts` caso o `next_page` indique que existam mais posts a serem exibidos (link). Ao clicar no botão, você carregar os posts da nova paginação e concatenar com os existentes em tela. Obrigatório utilizar o `fetch`.
    
- **should not be able to load more posts if not available**
    
    Para que esse teste passe você não deve renderizar em tela o botão `Carregar mais posts` caso o `next_page` indique que não há mais posts a serem carregados (`null`).
/* eslint-disable @next/next/no-img-element */

const categories = [
  { number: "01", name: "Bongs", description: "Vidro, presença e precisão." },
  { number: "02", name: "Pipes", description: "Formatos compactos e autorais." },
  {
    number: "03",
    name: "Dichavadores",
    description: "Mecânica simples. Acabamento impecável.",
  },
  {
    number: "04",
    name: "Maçaricos",
    description: "Controle e potência em cada chama.",
  },
  {
    number: "05",
    name: "Acessórios",
    description: "Os detalhes que completam sua experiência.",
  },
  { number: "06", name: "Kits", description: "Curadorias prontas para você." },
];

const products = [
  {
    name: "Bong de vidro Ônix",
    category: "Vidro borossilicato",
    price: "R$ 189,90",
    installment: "ou 12x de R$ 18,97",
    image: "/assets/product-bong-hq.png",
    tag: "ÍCONE SOS",
  },
  {
    name: "Pipe de vidro Orbit",
    category: "Coleção Essentials",
    price: "R$ 59,90",
    installment: "ou 6x de R$ 11,15",
    image: "/assets/product-pipe-hq.png",
    tag: "ESSENCIAL",
  },
  {
    name: "Dichavador 4 partes",
    category: "Alumínio anodizado",
    price: "R$ 79,90",
    installment: "ou 8x de R$ 11,05",
    image: "/assets/product-grinder-hq.png",
    tag: "MAIS VENDIDO",
  },
  {
    name: "Maçarico Flame",
    category: "Chama dupla",
    price: "R$ 89,90",
    installment: "ou 9x de R$ 11,08",
    image: "/assets/product-torch-hq.png",
    tag: "NOVO",
  },
  {
    name: "Kit Essential 05",
    category: "Curadoria SOS",
    price: "R$ 249,90",
    installment: "ou 12x de R$ 24,95",
    image: "/assets/product-kit-hq.png",
    tag: "KIT",
  },
];

const assurances = [
  ["01", "COMPRA SEGURA", "Ambiente protegido"],
  ["03", "ATÉ 12X", "No cartão de crédito"],
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#inicio" aria-label="SOS Pipe — início">
          <img
            src="/assets/sos-pipe-logo-official-v2.png"
            alt="SOS Pipe"
            width={2048}
            height={2048}
          />
        </a>

        <nav className="desktopNav" aria-label="Navegação principal">
          <a className="active" href="#inicio">
            Início
          </a>
          <a href="#produtos">Produtos</a>
          <a href="#categorias">Categorias</a>
          <a href="#manifesto">A marca</a>
          <a href="#contato">Contato</a>
        </nav>

        <details className="mobileMenu">
          <summary aria-label="Abrir menu">MENU</summary>
          <nav aria-label="Navegação móvel">
            <a href="#inicio">Início</a>
            <a href="#produtos">Produtos</a>
            <a href="#categorias">Categorias</a>
            <a href="#manifesto">A marca</a>
            <a href="#contato">Contato</a>
          </nav>
        </details>
      </header>

      <section
        className="hero heroBanner"
        id="inicio"
        aria-label="SOS Pipe Smoke Shop 24 horas"
      >
        <img
          className="heroBannerImage"
          src="/assets/hero-banner-sos-pipe.jpg"
          alt="Banner SOS Pipe Smoke Shop 24h com fumaça azul e acessórios"
          width={2048}
          height={880}
        />
        <a
          className="button buttonLight heroDeliveryButton"
          href="https://wa.me/5511970602047"
          target="_blank"
          rel="noreferrer"
          aria-label="Chamar a SOS Pipe no WhatsApp"
        >
          DELIVERY JÁ
        </a>
      </section>

      <section className="assuranceBar" aria-label="Benefícios da loja">
        {assurances.map(([number, title, text]) => (
          <article key={title}>
            <span className="assuranceNumber">{number}</span>
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="section categoriesSection" id="categorias">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">ESCOLHA POR CATEGORIA</p>
            <h2>OBJETOS PARA O SEU MOMENTO.</h2>
          </div>
          <p>
            Uma seleção direta, funcional e sem excessos. Encontre o que combina
            com a sua forma de viver cada momento.
          </p>
        </div>

        <div className="categoryGrid">
          {categories.map((category) => (
            <a className="categoryCard" href="#produtos" key={category.name}>
              <div className="categoryTop">
                <span>{category.number}</span>
                <span className="categoryArrow">↗</span>
              </div>
              <div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="manifesto" id="manifesto">
        <div className="manifestoMark">
          <img
            src="/assets/sos-pipe-logo-official-v2.png"
            alt=""
            width={2048}
            height={2048}
          />
        </div>
        <div className="manifestoCopy">
          <p className="eyebrow">O QUE NOS MOVE</p>
          <h2>ALÉM DO OBJETO. UMA EXPERIÊNCIA.</h2>
          <p>
            A SOS nasceu para selecionar objetos que unem função, estética e
            personalidade. Cada peça entra na curadoria pelo material, pelo
            desenho e pela experiência que entrega — nada está aqui por acaso.
          </p>
          <a className="textLink" href="#contato">
            NOSSA HISTÓRIA <span>↗</span>
          </a>
        </div>
      </section>

      <section className="section productsSection" id="produtos">
        <div className="productGrid">
          {products.map((product) => (
            <article className="productCard" key={product.name}>
              <div className="productImage">
                <span className="productTag">{product.tag}</span>
                <img
                  src={product.image}
                  alt={product.name}
                  width={1254}
                  height={1254}
                  loading="lazy"
                />
                <a
                  className="quickAdd"
                  href="#contato"
                  aria-label={`Ver detalhes de ${product.name}`}
                >
                  +
                </a>
              </div>
              <div className="productInfo">
                <p>{product.category}</p>
                <h3>{product.name}</h3>
                <strong>{product.price}</strong>
                <span>{product.installment}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer id="contato">
        <div className="footerTop">
          <div className="footerBrand">
            <img
              src="/assets/sos-pipe-logo-official-v2.png"
              alt="SOS Pipe"
              width={2048}
              height={2048}
            />
            <p>
              Curadoria de acessórios para quem encontra significado nos
              detalhes.
            </p>
          </div>
          <div className="footerColumn">
            <h2>LOJA</h2>
            <a href="#produtos">Todos os produtos</a>
            <a href="#categorias">Categorias</a>
            <a href="#produtos">Lançamentos</a>
            <a href="#produtos">Kits</a>
          </div>
          <div className="footerColumn">
            <h2>SUPORTE</h2>
            <a href="mailto:contato@sospipestore.com.br">
              contato@sospipestore.com.br
            </a>
            <a href="#contato">Envios e prazos</a>
            <a href="#contato">Trocas e devoluções</a>
            <a href="#contato">Perguntas frequentes</a>
          </div>
          <div className="footerColumn newsletter">
            <h2>FIQUE POR PERTO</h2>
            <p>Novidades, curadorias e lançamentos direto no seu e-mail.</p>
            <form>
              <label className="srOnly" htmlFor="email">
                Seu e-mail
              </label>
              <input id="email" type="email" placeholder="SEU E-MAIL" />
              <button type="submit" aria-label="Cadastrar e-mail">
                ↗
              </button>
            </form>
          </div>
        </div>
        <div className="footerBottom">
          <span>© 2026 SOS PIPE</span>
          <span>CONTEÚDO DESTINADO A MAIORES DE 18 ANOS</span>
          <div>
            <a href="#contato">PRIVACIDADE</a>
            <a href="#contato">TERMOS</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

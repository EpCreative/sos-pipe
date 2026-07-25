/* eslint-disable @next/next/no-img-element */

const categories = [
  { name: "Bongs", icon: "fa-bong" },
  { name: "Pipes", icon: "fa-smoking" },
  { name: "Dichavadores", icon: "fa-gear" },
  { name: "Maçaricos", icon: "fa-fire-flame-curved" },
  { name: "Acessórios", icon: "fa-shapes" },
  { name: "Kits", icon: "fa-box-open" },
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
          <a href="#categorias">Categorias</a>
          <a href="#manifesto">A marca</a>
          <a href="#contato">Contato</a>
        </nav>

        <details className="mobileMenu">
          <summary aria-label="Abrir menu">MENU</summary>
          <nav aria-label="Navegação móvel">
            <a href="#inicio">Início</a>
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
        <div className="categoryGrid">
          {categories.map((category) => (
            <article className="categoryCard" key={category.name}>
              <span className="categoryIcon" aria-hidden="true">
                <i className={`fa-solid ${category.icon} fa-fw`} />
              </span>
              <h3>{category.name}</h3>
            </article>
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
          <h2>SEMPRE QUE PRECISAR, CONTE COM A SOS PIPE.</h2>
          <div className="manifestoText">
            <p className="manifestoLead">
              A madrugada não para. E nós também não.
            </p>
            <p>
              A SOS Pipe é um delivery especializado em produtos para tabacaria
              criado para atender quem precisa de um maçarico, bong, pipe,
              sedas, dichavadores e acessórios com rapidez, principalmente
              quando a maioria das lojas já encerrou o atendimento.
            </p>
            <p>
              Porque imprevistos acontecem. E quando acontecerem, a SOS Pipe
              está pronta para atender.
            </p>
          </div>
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
          </div>
          <div className="footerColumn">
            <h2>LOJA</h2>
            <a href="#categorias">Categorias</a>
          </div>
          <div className="footerColumn">
            <h2>SUPORTE</h2>
            <a href="mailto:contato@sospipestore.com.br">
              contato@sospipestore.com.br
            </a>
            <a href="#contato">Envios e prazos</a>
            <a href="#contato">Trocas e devoluções</a>
          </div>
          <div className="footerColumn newsletter">
            <h2>FIQUE POR PERTO</h2>
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

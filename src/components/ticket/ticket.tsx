export const TicketComponent = ({
  id,
  size = `small` || `large`,
  imageUrl,
  idTicket,
  nome,
  modo,
}: {
  id?: string;
  size: string;
  imageUrl: string;
  idTicket: number;
  nome: string;
  modo: string;
}) => (
  <section className={`ticket ${size} ${id ? `hid` : ``}`} id={id}>
    <div className="column">
      <header className="meetup">
        <span>Meetup de</span>
        <span className="js-text">JS</span>
        <span>- Ribeirão Preto</span>
      </header>
      <main className="participante">
        <img src={imageUrl} alt="Foto do Participante" />
        <div>
          <div className="nome">{nome}</div>
          <div className="modo">{modo}</div>
        </div>
      </main>
      <footer className="infos">
        <img src="logo.svg" alt="logo rpjs" />
        <div>
          <div className="data">25 de julho às 19 horas</div>
          {modo === `Presencial` ? (
            <>
              <div className="informacoes-modo">Dabi Business Park</div>
              <div className="informacoes-modo">
                R. Gen. Augusto Soares dos Santos, 100 - Parque Industrial Lagoinha
              </div>
            </>
          ) : (
            <>
              <div className="informacoes-modo">Live no canal RPjs</div>
              {/* TODO: Criar youtube e mudar URL aqui */}
              <div className="informacoes-modo">https://bit.ly/YtTechRP</div>
            </>
          )}
        </div>
      </footer>
    </div>
    <div className="column">
      <header className="id-ticket">N° {idTicket}</header>
      <footer className="urls">
        <img className="qrcode" src="qr-code-discord.png" alt="QrCode para o Discord" />
        <div className="site-url">rpjs.com.br</div>
      </footer>
    </div>
  </section>
);

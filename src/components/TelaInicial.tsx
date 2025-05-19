import './TelaInicial.css';

function TelaInicial() {
return (
<div className="container">
    {/* Topbar */}
    <header className="topbar">
    <span>CartilhaDigital</span>
    <div className="profile-icon">👤</div>
    </header>

    {/* Barra azul */}
    <div className="blue-bar" />

    {/* Conteúdo principal */}
    <main className="main-content">
    <h1 className="title">Bem-Vindo</h1>
    <p className="subtitle">
        Crie cartilhas digitais de forma rápida e profissional
    </p>
    <div className="buttons">
        <button className="btn-primary">Carregar PDF</button>
        <button className="btn-secondary">Criar agora</button>
    </div>
    </main>

    {/* Botão de ajuda fixo no canto */}
    <button aria-label="Ajuda" className="help-button">
    ❔
    </button>
</div>
);
}

export default TelaInicial;

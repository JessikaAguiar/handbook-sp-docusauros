import React from 'react';
import styles from './HomepageFeatures.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
            <div className="col">
                <p>O Sistema Inteligente de software integrado para controlar itens de matéria prima na produção aplicadas na indústria 4.0 (SIIMPP4.0), trata-se de uma plataforma computacional, composta por um software de monitoramento e controle da alimentação da linha e estoque, integrado a uma arquitetura de hardware responsável pela obtenção de dados em tempo real, que serão coletados nos postos de controle de uma linha piloto.</p>
                <section className={styles.displayFlex}>
                    <figure className={styles.centerImg}>
                        <img className={styles.featureSvg} src={require('@site/static/img/img_siimpp/visao_geral.gif').default} />
                        <figcaption>Figura 1 - Veículos Autônomos</figcaption>
                    </figure>
                    <p>Logo, foi utilizado as tecnologias de aprendizagem de máquina, robôs autônomos e controle de máquina, baseado em dispositivo móvel, as quais serão aplicados na integração entre o almoxarifado e a produção da empresa.</p>
                </section>
                <section className={styles.displayFlex}>
                    <article>
                        <p>Para o sistema foram desenvolvidos os seguintes módulos:</p>
                        <ol>
                            <li>Dashboard</li>
                            <li>Controle de perfil</li>
                            <li>Registro do usuário</li>
                            <li>Log de eventos</li>
                            <li>Controle de produto</li>
                            <li>Cadastro de fornecedores</li>
                            <li>Cadastro de clientes</li>
                            <li>Controle de notas</li>
                            <li>Controle de endereçamento</li>
                            <li>Controle de filiais</li>
                            <li>Expedição de produtos</li>
                            <li>Ordem de produção</li>
                            <li>Linhas de produção</li>
                            <li>Movimentações</li>
                            <li>Picking</li>
                            <li>WIP</li>
                            <li>Segurança</li>
                        </ol>
                    </article>
                    <figure className={`${styles.centerImg} ${styles.marginTop}`}>
                        <img className={styles.featureSvg} src={require('@site/static/img/img_siimpp/intro_siimpp.gif').default} />
                        <figcaption>Figura 2 - Breve demonstração do Sistema Inteligente de software integrado para controlar itens de matéria prima na produção aplicadas na indústria 4.0</figcaption>
                    </figure>
                </section>
            </div>
        </div>
      </div>
    </section>
  );
}
''
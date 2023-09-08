import { useContext } from "react";

import { LanguageContext } from "../../Contexts/LanguageContext";

import book from "../../language/book.json";

import "./styles.css";

import Button from "../Button";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-item">
        <div className="item-text">
          <span>Qual o seu nome?</span>
          <span className="required-lbl">OBRIGATÓRIO</span>
        </div>
        <input type="text" placeholder="Digite seu nome completo" required />
      </div>
      <div className="contact-item">
        <div className="item-text">
          <span>Qual é o seu e-mail?</span>
          <span className="required-lbl">OBRIGATÓRIO</span>
        </div>
        <input type="text" placeholder="Digite aqui..." required />
      </div>
      <div className="contact-item">
        <div className="item-text">
          <span>Para qual empresa você trabalha?</span>
          <span className="required-lbl">OBRIGATÓRIO</span>
        </div>
        <input type="text" placeholder="Digite aqui..." required />
      </div>
      <div className="contact-item">
        <div className="item-text">
          <span>Dê-me um resumo do que você pretende tratar comigo.</span>
          <span className="required-lbl">OBRIGATÓRIO</span>
        </div>
        <textarea
          placeholder="Mensagem"
          maxLength={1500}
          required
          style={{ minHeight: "200px" }}
        ></textarea>
      </div>
      <div className="contact-item">
        <div className="item-text">
          <span>Como você chegou até mim?</span>
          <span className="required-lbl">OBRIGATÓRIO</span>
        </div>
        <input type="text" placeholder="Digite aqui..." required />
      </div>
      <div className="contact-item no-grow align-right mt-30">
        <Button text="Enviar" url="" />
      </div>
    </div>
  );
};

export default Contact;

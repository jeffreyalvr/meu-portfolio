import { useContext } from "react";

import { LanguageContext } from "../../Contexts/LanguageContext";

import book from "../../language/book.json";

import "./styles.css";

import Button from "../Button";

const Contact = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="contact-container">
      <div className="contact-item">
        <div className="item-text">
          <span>
            {lang === "pt-br"
              ? book.pt_br.contact.cnt_span_1
              : book.en_ca.contact.cnt_span_1}
          </span>
          <span className="required-lbl">
            {lang === "pt-br"
              ? book.pt_br.contact.cnt_lbl_required
              : book.en_ca.contact.cnt_lbl_required}
          </span>
        </div>
        <input
          type="text"
          placeholder={
            lang === "pt-br"
              ? book.pt_br.contact.cnt_input_txt_fullname
              : book.en_ca.contact.cnt_input_txt_fullname
          }
          required
        />
      </div>
      <div className="contact-item">
        <div className="item-text">
          <span>
            {lang === "pt-br"
              ? book.pt_br.contact.cnt_span_2
              : book.en_ca.contact.cnt_span_2}
          </span>
          <span className="required-lbl">
            {lang === "pt-br"
              ? book.pt_br.contact.cnt_lbl_required
              : book.en_ca.contact.cnt_lbl_required}
          </span>
        </div>
        <input
          type="text"
          placeholder={
            lang === "pt-br"
              ? book.pt_br.contact.cnt_input_txt_generic
              : book.en_ca.contact.cnt_input_txt_generic
          }
          required
        />
      </div>
      <div className="contact-item">
        <div className="item-text">
          <span>
            {lang === "pt-br"
              ? book.pt_br.contact.cnt_span_3
              : book.en_ca.contact.cnt_span_3}
          </span>
          <span className="required-lbl">
            {lang === "pt-br"
              ? book.pt_br.contact.cnt_lbl_required
              : book.en_ca.contact.cnt_lbl_required}
          </span>
        </div>
        <input
          type="text"
          placeholder={
            lang === "pt-br"
              ? book.pt_br.contact.cnt_input_txt_generic
              : book.en_ca.contact.cnt_input_txt_generic
          }
          required
        />
      </div>
      <div className="contact-item">
        <div className="item-text">
          <span>
            {lang === "pt-br"
              ? book.pt_br.contact.cnt_span_4
              : book.en_ca.contact.cnt_span_4}
          </span>
          <span className="required-lbl">
            {lang === "pt-br"
              ? book.pt_br.contact.cnt_lbl_required
              : book.en_ca.contact.cnt_lbl_required}
          </span>
        </div>
        <textarea
          placeholder={
            lang === "pt-br"
              ? book.pt_br.contact.cnt_input_txt_message
              : book.en_ca.contact.cnt_input_txt_message
          }
          maxLength={1500}
          required
          style={{ minHeight: "200px" }}
        ></textarea>
      </div>
      <div className="contact-item">
        <div className="item-text">
          <span>
            {lang === "pt-br"
              ? book.pt_br.contact.cnt_span_5
              : book.en_ca.contact.cnt_span_5}
          </span>
          <span className="required-lbl">
            {lang === "pt-br"
              ? book.pt_br.contact.cnt_lbl_required
              : book.en_ca.contact.cnt_lbl_required}
          </span>
        </div>
        <input
          type="text"
          placeholder={
            lang === "pt-br"
              ? book.pt_br.contact.cnt_input_txt_generic
              : book.en_ca.contact.cnt_input_txt_generic
          }
          required
        />
      </div>
      <div className="contact-item align-right">
        <div className="action-buttons">
          <Button
            text={
              lang === "pt-br"
                ? book.pt_br.contact.cnt_btn_send
                : book.en_ca.contact.cnt_btn_send
            }
            url=""
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

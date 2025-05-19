import book from "@language/book.json";

import "./styles.css";

import send_icon from "@assets/icons/send.png";

import { ActionButton } from "@components/Button";

import useLanguageStore from "@/store/useLanguageStore";

const Contact = () => {
  const language = useLanguageStore((state) => state.language);

  return (
    <div className="contact-container">
      <div className="contact-item">
        <div className="item-text">
          <span>
            {language === "pt"
              ? book.pt.contact.cnt_span_1
              : book.en.contact.cnt_span_1}
          </span>
          <span className="required-lbl">
            {language === "pt"
              ? book.pt.contact.cnt_lbl_required
              : book.en.contact.cnt_lbl_required}
          </span>
        </div>
        <input
          type="text"
          placeholder={
            language === "pt"
              ? book.pt.contact.cnt_input_txt_fullname
              : book.en.contact.cnt_input_txt_fullname
          }
          required
        />
      </div>
      <div className="contact-item">
        <div className="item-text">
          <span>
            {language === "pt"
              ? book.pt.contact.cnt_span_2
              : book.en.contact.cnt_span_2}
          </span>
          <span className="required-lbl">
            {language === "pt"
              ? book.pt.contact.cnt_lbl_required
              : book.en.contact.cnt_lbl_required}
          </span>
        </div>
        <input
          type="text"
          placeholder={
            language === "pt"
              ? book.pt.contact.cnt_input_txt_generic
              : book.en.contact.cnt_input_txt_generic
          }
          required
        />
      </div>
      <div className="contact-item">
        <div className="item-text">
          <span>
            {language === "pt"
              ? book.pt.contact.cnt_span_3
              : book.en.contact.cnt_span_3}
          </span>
          <span className="required-lbl">
            {language === "pt"
              ? book.pt.contact.cnt_lbl_required
              : book.en.contact.cnt_lbl_required}
          </span>
        </div>
        <input
          type="text"
          placeholder={
            language === "pt"
              ? book.pt.contact.cnt_input_txt_generic
              : book.en.contact.cnt_input_txt_generic
          }
          required
        />
      </div>
      <div className="contact-item">
        <div className="item-text">
          <span>
            {language === "pt"
              ? book.pt.contact.cnt_span_4
              : book.en.contact.cnt_span_4}
          </span>
          <span className="required-lbl">
            {language === "pt"
              ? book.pt.contact.cnt_lbl_required
              : book.en.contact.cnt_lbl_required}
          </span>
        </div>
        <textarea
          placeholder={
            language === "pt"
              ? book.pt.contact.cnt_input_txt_message
              : book.en.contact.cnt_input_txt_message
          }
          maxLength={1500}
          required
          style={{ minHeight: "200px" }}
        ></textarea>
      </div>
      <div className="contact-item">
        <div className="item-text">
          <span>
            {language === "pt"
              ? book.pt.contact.cnt_span_5
              : book.en.contact.cnt_span_5}
          </span>
          <span className="required-lbl">
            {language === "pt"
              ? book.pt.contact.cnt_lbl_required
              : book.en.contact.cnt_lbl_required}
          </span>
        </div>
        <input
          type="text"
          placeholder={
            language === "pt"
              ? book.pt.contact.cnt_input_txt_generic
              : book.en.contact.cnt_input_txt_generic
          }
          required
        />
      </div>
      <div className="contact-item align-right">
        <div className="action-buttons">
          <ActionButton
            overrideClass="invert-img-hover"
            text={
              language === "pt"
                ? book.pt.contact.cnt_btn_send
                : book.en.contact.cnt_btn_send
            }
            icon={send_icon}
            url=""
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

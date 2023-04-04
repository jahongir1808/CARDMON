import React from "react";
import { Button, Card } from "react-bootstrap";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const DebtsCard = ({
  price,
  category,
  debtsName,
  telNumber,
  description,
  dueDate,
  selectDebts,
  editDebts,
  id,
  date,
  time,
}) => {
  return (
    <Card>
      <Card.Body >
        <Card.Title className="d-flex justify-content-between align-items-center mb-5">
          <span>{price} UZS</span>
          <div className="operation d-flex flex-column gap-2">
            <h5>Данные операции: </h5>
            <span>Дата: {date}</span>
            <span>Время: {time}</span>
            <span>Срок оплаты: {dueDate}</span>
            <span>Имя: {debtsName}</span>
            <span>Тел: {telNumber}</span>
          </div>
        </Card.Title>
        <Card.Subtitle className="mb-2">
          Категория: <span className="text-muted">{category}</span>
        </Card.Subtitle>
        <div className="mb-5 pb-3">
          <h6>Заметка:</h6>
          <Card.Subtitle className="desc d-flex flex-column mb-2">
            <span className="text-muted">{description}</span>
          </Card.Subtitle>
        </div>
        <div className="btns d-flex justify-content-end gap-2">
          <Button variant="primary" onClick={() => editDebts(id)}>
            <AiOutlineDelete /> Edit
          </Button>
          <Button variant="danger" onClick={() => selectDebts(id)}>
            <AiOutlineEdit /> Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DebtsCard;

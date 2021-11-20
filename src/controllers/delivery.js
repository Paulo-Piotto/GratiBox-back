import connection from '../database/database.js';
import { deliveryValidation } from '../validations/validations.js';

async function postDelivery(req, res) {
  const {
    userId,
    fullName,
    adress,
    cep,
    city,
    state,
  } = req.body;

  const errors = deliveryValidation.validate({
    userId,
    fullName,
    adress,
    cep,
    city,
    state,
  }).error;

  if (errors) {
    return res.sendStatus(400);
  }

  try {
    await connection.query('INSERT INTO delivery ("user_id", "full_name", adress, cep, city, state) VALUES ($1, $2, $3, $4, $5, $6)', [userId, fullName, adress, cep, city, state]);
    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }
}

export default postDelivery;

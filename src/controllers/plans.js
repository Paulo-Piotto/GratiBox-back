import connection from '../database/database.js';
import { planValidation } from '../validations/validations.js';

async function postPlan(req, res) {
  const {
    userId,
    type,
    deliveryDate,
    products,
    signDate,
  } = req.body;

  const errors = planValidation.validate({
    userId,
    type,
    deliveryDate,
    products,
    signDate,
  }).error;

  if (errors) {
    return res.sendStatus(400);
  }

  try {
    await connection.query('INSERT INTO plans ("user_id", type, "delivery_date", products, "sign_date") VALUES ($1, $2, $3, $4, $5)', [userId, type, deliveryDate, products, signDate]);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function getPlan(req, res) {
  const { authorization } = req.headers;
  const sessionToken = authorization?.split('Bearer ')[1];

  try {
    const session = (await connection.query('SELECT * FROM sessions WHERE token = $1', [sessionToken])).rows[0];
    const planData = await connection.query('SELECT * FROM plans WHERE "user_id" = $1', [session.user_id]);
    res.send(planData.rows[0]);
  } catch (error) {
    res.sendStatus(500);
  }
}

export {
  postPlan,
  getPlan,
};

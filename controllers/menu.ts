import BaseCtrl from './base';
import Menu from '../model/menu';
import { async } from 'q';

export default class MenuCtrl extends BaseCtrl {
  model = Menu;

  insertMany = async (req, res) => {
    try {
      const obj = await  this.model.insertMany(req.body);
      res.status(201).json(obj);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

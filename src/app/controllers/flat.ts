import { Flat } from "../models/flat";
import { database } from "../../lib/database";
import { Request, Response, NextFunction } from "express";


export const index = async (req: Request, res: Response) => {
  const flat: Array<Flat> = await database('flats').select().limit(req.query.limit).offset(req.query.offset);
  res.json(flat);

export const show = async (req: Request, res: Response) => {
  try {
    const flat: Flat = await database('flats').select().where({ id: req.params.id }).first();
    if (typeof flat !== 'undefined') {
      res.json(flat);
    } else {
      res.sendStatus(404);
    }
  } catch(error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const flat: Flat = {
      title: req.body.title,
       price: req.body.price,
      floorArea: req.body.floorArea,
      country: req.body.country,
      zip: req.body.zip,
      city: req.body.city,
      street: req.body.street,
    }
    await database('flats').insert(flat);
    res.sendStatus(201);
  } catch(error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const flat: Flat = await database('flats').select().where({ id: req.params.id }).first();
    if (flat) {
      const newGroup: Flat = {
        title: req.body.title,
        price: req.body.price,
        floorArea: req.body.floorArea,
        country: req.body.country,
        zip: req.body.zip,
        city: req.body.city,
        street: req.body.street,
      }
      await database('flats').update(newGroup).where({ id: req.params.id });
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch(error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export const destroy = async (req: Request, res: Response) => {
  try {
    const flat: Flat = await database('flats').select().where({ id: req.params.id }).first();
    if (flat) {
      await database('flats').delete().where({ id: req.params.id });
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch(error) {
    console.error(error);
    res.sendStatus(500);
  }
};
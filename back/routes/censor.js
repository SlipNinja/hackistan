import express from "express"; 
import { censorMiddleware } from "../middlewares/moderation.message";
 


const { Router} = require("express");

const router = Router(); 

router.post("/censor", censorMiddleware); 


import nodemailer from 'nodemailer';
import config from '../config/index.js';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.env.nodemailer.user,
    pass: config.env.nodemailer.app_password,
  }
})

export default transporter;
// // app/api/contact/route.js
// import { NextResponse } from 'next/server';
// import fetch from 'node-fetch';
// import {APIROUT} from '@/app/exports';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { your_name, phone_number, email, subject, message } = req.body;

//     const formData = new URLSearchParams();
//     formData.append('your_name', your_name);
//     formData.append('phone_number', phone_number);
//     formData.append('email', email);
//     formData.append('subject', subject);
//     formData.append('message', message);

//     try {
//       const response = await fetch(`${APIROUT}contact-form-7/v1/contact-forms/d92151b/feedback`, {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         return NextResponse.json({ error: 'Failed to submit contact form' }, { status: response.status });
//       }

//       const data = await response.json();
//       return NextResponse.json(data, { status: 200 });
//     } catch (error) {
//       return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

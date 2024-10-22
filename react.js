// components/CertificateForm.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const CertificateForm = ({ onGenerate }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [certificateId, setCertificateId] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate({ name, description, certificateId, date });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Recipient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Certificate Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <TextField
        label="Certificate ID"
        value={certificateId}
        onChange={(e) => setCertificateId(e.target.value)}
        required
      />
      <TextField
        label="Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <Button variant="contained" type="submit">Generate Certificate</Button>
    </Box>
  );
};

import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const CertificateDisplay = ({ certificate }) => {
  const { name, description, certificateId, date } = certificate;

  return (
    <Paper elevation={3} sx={{ width: '841.92px', height: '595.5px', top: '-325.83px', left: '-421.15px', gap: '0px', opacity: '0px', margin: '0 auto', padding: 3, textAlign: 'center', backgroundImage: 'url(/path/to/your/certificate/background.jpg)', backgroundSize: 'cover', background: '#FFFFFF' }}>
      <Typography variant="h3">Certificate of Achievement</Typography>
      <Typography variant="h5">{name}</Typography>
      <Typography variant="body1">{description}</Typography>
      <Typography variant="body2">Certificate ID: {certificateId}</Typography>
      <Typography variant="body2">Date: {date}</Typography>
    </Paper>
  );
};

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = async (certificateRef) => {
  const canvas = await html2canvas(certificateRef.current); // Take a screenshot of the certificate DOM element
  const imgData = canvas.toDataURL('image/png'); // Convert the canvas to an image
  const pdf = new jsPDF('landscape'); // Create a PDF document
  pdf.addImage(imgData, 'PNG', 0, 0, 297, 210); // Add the image to the PDF (297x210 is A4 size in mm)
  pdf.save('certificate.pdf'); // Save the PDF
};


import React, { useRef, useState } from 'react';
import CertificateForm from './components/CertificateForm';
import CertificateDisplay from './components/CertificateDisplay';
import { generatePDF } from './utils/generatePDF';
import { Button, Box } from '@mui/material';
  
  
  

export default CertificateForm;







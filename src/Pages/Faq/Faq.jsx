import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="faq-1-content" id="faq-1-header">
          <Typography variant="h6">What is the purpose of this dashboard?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This dashboard provides a comprehensive overview of key metrics and data relevant to our organization.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="faq-2-content" id="faq-2-header">
          <Typography variant="h6">How often is the data updated?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The data on this dashboard is updated in real-time to ensure you have the latest information at your fingertips.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="faq-3-content" id="faq-3-header">
          <Typography variant="h6">Can I customize the dashboard?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Currently, the dashboard's customization options are limited, but we are working on adding more features in the future.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="faq-4-content" id="faq-4-header">
          <Typography variant="h6">Is there a mobile app available?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we have a mobile app available for download on both iOS and Android platforms.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="faq-5-content" id="faq-5-header">
          <Typography variant="h6">How can I contact support?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            For support inquiries, please contact our customer support team at support@example.com.
          </Typography>
        </AccordionDetails>
      </Accordion>

     
    </div>
  );
};

export default Faq;

import React from 'react';
import {
  Container,
  Typography,  
  Box,
  Divider,  
  List,
  ListItem,
  ListItemText,
  Grid, 
} from '@mui/material';


const About: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Prakher Srivastava
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        Vice President - Engineering Head Reference Data India | Barclays
      </Typography>

      <Box mt={2}>
        <Typography variant="body1">📍 Pune, Maharashtra</Typography>
        <Typography variant="body1">📞 9689881162</Typography>
        <Typography variant="body1">📧 srivastava.prakher@gmail.com</Typography>
        <Typography variant="body1">
          🔗{' '}
          <a href="https://linkedin.com/in/prakhersrivastava" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/prakhersrivastava
          </a>
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>
        Summary
      </Typography> 
      <Typography variant="body1">
        Accomplished Vice President with 20 years of experience in software engineering leadership, managing large
        technology teams, and driving innovative IT strategies. Proven track record in DevOps transformation, cost
        reduction, and technology scaling. Passionate about leveraging emerging technologies to achieve business goals.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={2}>
        
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>
        Key Achievements
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Awarded BX India Engineering Excellence awards (2021 & 2022) for DevOps transformation across 100+ applications." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Established and scaled Reference Data Technology team in India, expanding coverage from 100 to 400+ applications." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Decommissioned 4 legacy MDM systems, saving £500K annually." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Achieved 40% production support cost reduction via automation and monitoring." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Migrated monolithic apps to cloud-native microservices, cutting infra cost by 30%." />
        </ListItem>
      </List>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>
        Work Experience
      </Typography>

      <Box my={2}>
        <Typography variant="subtitle1" fontWeight="bold">
          Vice President – Head of Reference Data Technology India (2016 – Present) | Barclays
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Pune, Maharashtra
        </Typography>
        <Typography variant="body1" paragraph>
          Spearheaded cross-functional teams making up 65% of the global workforce across India, UK, and US. Led
          architecture modernization, cloud migration, DevOps transformation, and strategic budgeting for tech
          initiatives across 400+ applications.
        </Typography>
      </Box>

      <Box my={2}>
        <Typography variant="subtitle1" fontWeight="bold">
          Assistant Vice President | Barclays (Before 2016)
        </Typography>
        <Typography variant="body1">
          Led 20+ team members in product & engineering roles across 10 successful programs. Hands-on developer with
          expertise in Microsoft and SQL technologies.
        </Typography>
      </Box>

      <Box my={2}>
        <Typography variant="subtitle1" fontWeight="bold">
          Previous Roles: Associate @ RBS | Consultant @ Deloitte | Senior Developer @ a2z Inc | Infosys
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>
        Education
      </Typography>
      <Typography>
        Bachelor of Technology – Computer Science & Engineering (2001–2005), Madan Mohan Malviya Engineering College,
        Gorakhpur
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>
        Certifications & Trainings
      </Typography>
      <List dense>
        {[
          'Leading with Vision – LinkedIn',
          'AI for Organizational Leader – Microsoft',
          'Scrum Master – Learntube',
          'Project Management – Learntube',
          'DevOps Professional – PagerDuty',
          'Cloud Computing for Business Leader – LinkedIn',
          'Become an AI Powered Manager – LinkedIn',
          'Technology Specialist – Microsoft',
        ].map((cert) => (
          <ListItem key={cert}>
            <ListItemText primary={cert} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default About;

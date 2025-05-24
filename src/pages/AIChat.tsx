import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import {
  Paper,
  Box,
  Typography,
  Button,
  TextField,
  Stack,
} from '@mui/material';

const AIChat: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [hfToken, setHfToken] = useState<string>('');
  const [hfModel, setHfModel] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');
  const [responseText, setResponseText] = useState<string>('Response will be displayed here after submission');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file || !hfToken || !hfModel || !prompt) {
      alert('Please fill in all fields');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('hf_token', hfToken);
    formData.append('hf_model', hfModel);
    formData.append('prompt', prompt);

    try {
      const response = await axios.post('http://localhost:5000/process', formData);
      setResponseText(JSON.stringify(response.data));
    } catch (error) {
      setResponseText('Error submitting data' + error);
    }
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        AI Chat Bot
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <Stack spacing={3}>
          {/* File Upload */}
          <TextField
            type="file"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (e.target.files && e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
            label="Upload File"
            InputLabelProps={{ shrink: true }}
          />

          {/* Hugging Face Token */}
          <TextField
            value={hfToken}
            onChange={(e) => setHfToken(e.target.value)}
            label="Hugging Face Token"
            placeholder="Enter your Hugging Face token"
            fullWidth
          />

          {/* Hugging Face Model */}
          <TextField
            value={hfModel}
            onChange={(e) => setHfModel(e.target.value)}
            label="Hugging Face Model"
            placeholder="e.g. meta-llama/Llama-2-7b-chat-hf"
            fullWidth
          />

          {/* Prompt Input */}
          <TextField
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            label="Enter Prompt"
            multiline
            rows={4}
            placeholder="Type your prompt here..."
          />

          {/* Response Output */}
          <TextField 
            value={responseText}
            label="Response from LLM"
            disabled 
            multiline
            rows={4}
            placeholder="See your response here..."
          />

          {/* Submit Button */}
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default AIChat;
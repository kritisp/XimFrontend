// src/lib/api.ts
import { VerificationResult } from '../types/headline.types';

export async function verifyTitle(title: string): Promise<VerificationResult> {
  const apiUrl = import.meta.env.VITE_API_URL || 'https://xim.onrender.com';
  
  console.log("Sending POST to /verify");
  
  const response = await fetch(`${apiUrl}/verify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });

  if (!response.ok) {
    let errorMessage = 'Administrative error during verification';
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch (e) {
      // If not JSON, try text
      const textError = await response.text().catch(() => '');
      if (textError) errorMessage = textError.slice(0, 100);
    }
    throw new Error(`${errorMessage} (Status: ${response.status}) at ${apiUrl}/verify`);
  }

  return response.json();
}

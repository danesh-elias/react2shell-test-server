'use client'

import { useState } from 'react'
import { processData } from '../actions/serverActions'

export function ServerActionForm() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setResult(null)
    setError(null)

    try {
      const response = await processData(input)
      setResult(response)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    }
  }

  return (
    <div>
      <h2>Server Action Form</h2>
      <p>
        This form uses a Server Action, which is vulnerable to React2Shell.
        The vulnerability exists in how React Server Components deserialize
        HTTP payloads for Server Function endpoints.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="data">Enter data to process:</label>
          <input
            id="data"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter some data..."
          />
        </div>
        <button type="submit">Process Data</button>
      </form>

      {result && (
        <div className="result">
          <h3>Result:</h3>
          <p>{result}</p>
        </div>
      )}

      {error && (
        <div className="result error">
          <h3>Error:</h3>
          <p>{error}</p>
        </div>
      )}

      <div className="warning" style={{ marginTop: '2rem' }}>
        <strong>Vulnerability Details:</strong>
        <p>
          The Server Action endpoint processes data using React&apos;s RSC Flight protocol.
          In vulnerable versions (React 19.0.0-19.2.0), the deserialization of HTTP payloads
          is unsafe and allows attacker-controlled data to influence server-side execution.
        </p>
        <p>
          <strong>Exploitation:</strong> Attackers can craft malicious HTTP requests to
          the RSC endpoint to achieve unauthenticated remote code execution.
        </p>
      </div>
    </div>
  )
}


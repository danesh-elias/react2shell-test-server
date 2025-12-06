// Server Component - vulnerable to React2Shell
export async function ServerComponent() {
  // This Server Component demonstrates the vulnerability
  // The RSC Flight protocol deserialization flaw allows RCE
  const serverData = await fetchServerData()
  
  return (
    <div className="result">
      <h2>Server Component</h2>
      <p>This is a React Server Component that processes server-side data.</p>
      <p>Server data: {serverData}</p>
      <p className="error">
        ⚠️ This component is vulnerable to React2Shell exploitation.
        The deserialization of RSC payloads is unsafe in React 19.0.0.
      </p>
    </div>
  )
}

async function fetchServerData() {
  // Simulate server-side data fetching
  return 'Server-side data loaded'
}


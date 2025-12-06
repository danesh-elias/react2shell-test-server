import { ServerActionForm } from './components/ServerActionForm'
import { ServerComponent } from './components/ServerComponent'

export default function Home() {
  return (
    <div className="container">
      <h1>React2Shell Test Server</h1>
      
      <div className="warning">
        <strong>⚠️ WARNING: This is a vulnerable application!</strong>
        <p>
          This application is intentionally vulnerable to CVE-2025-55182 (React2Shell).
          It uses React 19.0.0 and Next.js 15.0.4, which contain the RCE vulnerability.
          <strong> Do not deploy this to production or expose it to the internet.</strong>
        </p>
        <p>
          The vulnerability exists in React Server Components deserialization,
          allowing unauthenticated remote code execution through crafted HTTP requests.
        </p>
      </div>

      <ServerComponent />

      <ServerActionForm />
    </div>
  )
}


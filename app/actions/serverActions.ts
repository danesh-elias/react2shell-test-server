'use server'

// Server Action - vulnerable to React2Shell
// This demonstrates the vulnerability in React Server Components
export async function processData(data: string): Promise<string> {
  // This Server Action is vulnerable because React 19.0.0 has unsafe
  // deserialization in the RSC Flight protocol
  
  // Simulate processing
  await new Promise(resolve => setTimeout(resolve, 100))
  
  // The vulnerability allows RCE through crafted payloads
  // even without explicit Server Function endpoints
  return `Processed: ${data}`
}

// Additional Server Action that might be exploited
export async function executeCommand(command: string): Promise<string> {
  // This is intentionally vulnerable to demonstrate the RCE capability
  // In a real exploit, attackers would craft payloads to execute arbitrary code
  return `Command received: ${command}`
}


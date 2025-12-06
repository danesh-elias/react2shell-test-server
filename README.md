
<h1 align="center">React2Shell Test Server</h1>
<h4 align="center">A fully automated test server for demonstrating and testing React2Shell (CVE-2025-55182) vulnerability</h4>

# Description

We have been researching the React2Shell RCE (CVE-2025-55182) since it was released, and we worked on preventing this vulnerability with our customers. We are open-sourcing this test server for discovering and testing the React2Shell CVE-2025-55182 vulnerability. This shall be used by security teams to test their detection capabilities, validate WAF rules, and understand the exploitation mechanism in a controlled environment.

The vulnerability exists in the React Server Components "Flight" protocol deserialization. Unsafe deserialization allows attacker-controlled data to influence server-side execution when processing crafted payloads.

# Vulnerability Details

**CVE-2025-55182 (React2Shell)**
- Severity: Critical (CVSS 10.0)
- Type: Unauthenticated Remote Code Execution (RCE)
- Component: React Server Components (RSC) Flight Protocol

**Affected Versions:**

| Package | Vulnerable | Fixed |
|---------|-----------|-------|
| React | 19.0.0, 19.1.0, 19.1.1, 19.2.0 | 19.0.1, 19.1.2, 19.2.1 |
| Next.js | 15.0.4 - 16.0.6 | 15.0.5, 15.1.9, 15.2.6, 15.3.6, 15.4.8, 15.5.7, 16.0.7 |
| react-server-dom-webpack | 19.0.0 - 19.2.0 | 19.0.1, 19.1.2, 19.2.1 |
| react-server-dom-turbopack | 19.0.0 - 19.2.0 | 19.0.1, 19.1.2, 19.2.1 |
| react-server-dom-parcel | 19.0.0 - 19.2.0 | 19.0.1, 19.1.2, 19.2.1 |

**This server uses:** React 19.0.0 and Next.js 15.0.4

**Affected Frameworks:**
- Next.js (15.0.4 - 16.0.6, canaries 14.3.0-canary.77+)
- React Router (RSC mode)
- Waku
- Parcel RSC (@parcel/rsc)
- Vite RSC (@vitejs/plugin-rsc)
- RedwoodSDK (rwsdk)

# Usage

## Run with Docker Compose (Recommended)

```bash
cd react2shell-test-server
docker-compose up --build

# Or run in detached mode
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

## Run with Local Development

```bash
cd react2shell-test-server
npm install
npm run dev

# Production build (also vulnerable)
npm run build
npm start
```

Application available at `http://localhost:3000`

# Installation

```bash
npm install
```

# Docker Support

```bash
cd react2shell-test-server
sudo docker build -t react2shell-test-server .
sudo docker run -it --rm -p 3000:3000 react2shell-test-server
```


# Remediation

**Update React:**
```bash
npm update react react-dom react-server-dom-webpack
```

**Update Next.js:**
```bash
npm update next
```

**Fixed versions:**
- React: 19.0.1, 19.1.2, or 19.2.1
- Next.js: 15.0.5, 15.1.9, 15.2.6, 15.3.6, 15.4.8, 15.5.7, or 16.0.7



# References

- CVE-2025-55182: React Server Components RCE
- CVE-2025-66478: Next.js exposure to React2Shell
- [React Security Advisory](https://react.dev/blog/security)
- [Next.js Security Updates](https://nextjs.org/security)

# About FullHunt

FullHunt is the next-generation attack surface management platform. FullHunt enables companies to discover all of their attack surfaces, monitor them for exposure, and continuously scan them for the latest security vulnerabilities. All, in a single platform, and more.

FullHunt provides an enterprise platform for organizations. The FullHunt Enterprise Platform provides extended scanning and capabilities for customers. FullHunt Enterprise platform allows organizations to closely monitor their external attack surface, and get detailed alerts about every single change that happens. Organizations around the world use the FullHunt Enterprise Platform to solve their continuous security and external attack surface security challenges.

# Legal Disclaimer

This project is made for educational and ethical testing purposes only. Usage of react2shell-test-server for attacking targets without prior mutual consent is illegal. It is the end user's responsibility to obey all applicable local, state and federal laws. Developers assume no liability and are not responsible for any misuse or damage caused by this program.

# License

The project is licensed under MIT License.

# Author

_Mazin Ahmed_

- Email: _mazin at FullHunt.io_
- FullHunt: [https://fullhunt.io](https://fullhunt.io)
- Website: [https://mazinahmed.net](https://mazinahmed.net)
- Twitter: [https://twitter.com/mazen160](https://twitter.com/mazen160)
- Linkedin: [http://linkedin.com/in/infosecmazinahmed](http://linkedin.com/in/infosecmazinahmed)


import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Braces,
  Briefcase,
  Code2,
  Database,
  Download,
  Github,
  Globe,
  Linkedin,
  Mail,
  Phone,
  Server,
  ShieldCheck,
  TerminalSquare,
  Workflow,
} from "lucide-react";

export default function Page() {
  const systemStatus = [
    "initializing developer profile...",
    "name: Elahe Rasooli",
    "role: Full-Stack .NET Developer",
    "stack: ASP.NET | SQL Server | JavaScript",
    "status: open to software developer roles",
  ];

  return (
    <div style={{background:"#020617",color:"white",minHeight:"100vh",padding:"40px",fontFamily:"sans-serif"}}>
      <h1 style={{fontSize:"48px",marginBottom:"10px"}}>Elahe Rasooli</h1>
      <p style={{fontSize:"20px",marginBottom:"40px"}}>
        Full-Stack .NET Developer building scalable web applications and reliable backend systems.
      </p>

      <div style={{background:"#000",padding:"20px",borderRadius:"10px",fontFamily:"monospace"}}>
        {systemStatus.map((l,i)=>(
          <p key={i} style={{color:"#34d399"}}>{">"} {l}</p>
        ))}
      </div>

      <h2 style={{marginTop:"40px"}}>Projects</h2>
      <ul>
        <li>FrameItLive — Interactive frame customization app</li>
        <li>Job Application Assistant — ASP.NET CRUD application</li>
      </ul>

      <h2 style={{marginTop:"40px"}}>Contact</h2>
      <p>Email: elahe.rasooli@unb.ca</p>
      <p>Phone: +1 (506) 575-5670</p>
      <p>GitHub: github.com/elahers</p>
      <p>LinkedIn: linkedin.com/in/elahe-rasooli-7a4431274</p>
    </div>
  );
}

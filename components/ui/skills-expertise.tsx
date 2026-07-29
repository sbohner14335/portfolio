import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Server, Zap, Bot, MonitorCheck } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <MonitorCheck className="size-6" />,
    skills: [
      "Next.js",
      "TypeScript",
      "JavaScript",
      "React",
      "TailwindCSS",
      "Carbon",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
    description: "Creating engaging and interactive user interfaces with modern frameworks and best practices.",
  },
  {
    title: "Backend Development",
    icon: <Server className="size-6" />,
    skills: ["Node.js", "Express.js", "Python", "FastAPI", "RESTful APIs", "Microservices", "Open ID Connect (JWT)", "OpenAPI", "RBAC"],
    description: "Building robust server-side applications and APIs with scalable architecture.",
  },
  {
    title: "Database Management",
    icon: <Database className="size-6" />,
    skills: ["PostgreSQL", "Milvus", "Elasticsearch", "NoSQL", "Redis", "Db2", "SQLite", "MySQL", "Database Design", "Optimization"],
    description: "Designing and managing efficient database systems for optimal performance.",
  },
  {
    title: "DevOps & Cloud",
    icon: <Zap className="size-6" />,
    skills: ["IBM Cloud", "OpenShift", "AWS", "Docker", "CI/CD", "Linux", "Vercel", "Deployment", "Proxy", "Monitoring", "vLLM"],
    description: "Streamlining development workflows and deploying application Infrastructure.",
  },
  {
    title: "AI Automations",
    icon: <Bot className="size-6" />,
    skills: ["MCP", "NLP", "watsonx", "Machine Learning", "docling", "RAG", "Ollama", "Langchain", "Copilot", "Langflow"],
    description: "Implementing LLM solutions and automation workflows to solve complex business problems.",
  },
  {
    title: "Development Tools",
    icon: <Code className="size-6" />,
    skills: ["VS Code", "Cursor", "Git", "GitHub", "Postman", "npm", "Jest", "ESLint", "Prettier", "Figma", "excalidraw", "v0"],
    description: "Utilizing modern development tools and workflows for efficient coding practices.",
  },
]

export default function SkillsExpertise() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {skillCategories.map((category, index) => (
        <Card
          key={category.title}
          className="group h-full cursor-default transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-primary/30 hover:shadow-xl hover:shadow-primary/20"
          style={{
            animationDelay: `${index * 100}ms`,
            animation: "fadeInUp 0.8s ease-out forwards",
          }}
        >
          <CardHeader className="transition-colors duration-300 group-hover:bg-primary/5">
            <CardTitle className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                {category.icon}
              </div>
              <span className="transition-colors duration-300 group-hover:text-primary">{category.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-sm/6 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
              {category.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-xs transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground"
                  style={{
                    animationDelay: `${index * 100 + skillIndex * 50}ms`,
                    animation: "fadeIn 0.4s ease-out forwards",
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Server, Zap, Bot, MonitorCheck } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <MonitorCheck className="h-6 w-6" />,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "Carbon",
      "Responsive Design",
    ],
    description: "Creating engaging and interactive user interfaces with modern frameworks and best practices.",
  },
  {
    title: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "Express.js", "Python", "FastAPI", "RESTful APIs", "Microservices", "OIDC (JWT)", "OpenAPI"],
    description: "Building robust server-side applications and APIs with scalable architecture.",
  },
  {
    title: "Database Management",
    icon: <Database className="h-6 w-6" />,
    skills: ["PostgreSQL", "NoSQL", "MySQL", "Redis", "Db2", "Database Design", "Optimization"],
    description: "Designing and managing efficient database systems for optimal performance.",
  },
  {
    title: "DevOps & Cloud",
    icon: <Zap className="h-6 w-6" />,
    skills: ["AWS", "IBM Cloud", "Docker", "CI/CD", "OpenShift", "Linux", "Vercel", "Deployment", "Monitoring", "vLLM"],
    description: "Streamlining development workflows and deploying application Infrastructure.",
  },
  {
    title: "AI Automations",
    icon: <Bot className="h-6 w-6" />,
    skills: ["Machine Learning", "NLP", "Watsonx.ai", "Milvus", "docling", "RAG", "Ollama", "Langchain", "MCP", "Copilot", "Langflow"],
    description: "Implementing LLM solutions and automation workflows to solve complex business problems.",
  },
  {
    title: "Development Tools",
    icon: <Code className="h-6 w-6" />,
    skills: ["VS Code", "Git", "GitHub", "Postman", "Jest", "ESLint", "Prettier", "Figma", "continue.dev", "excalidraw", "v0"],
    description: "Utilizing modern development tools and workflows for efficient coding practices.",
  },
]

export default function SkillsExpertise() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {skillCategories.map((category, index) => (
        <Card
          key={category.title}
          className="h-full group cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 hover:border-primary/30 hover:scale-105"
          style={{
            animationDelay: `${index * 100}ms`,
            animation: "fadeInUp 0.6s ease-out forwards",
          }}
        >
          <CardHeader className="transition-colors duration-300 group-hover:bg-primary/5">
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                {category.icon}
              </div>
              <span className="transition-colors duration-300 group-hover:text-primary">{category.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
              {category.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-xs transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 cursor-pointer"
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

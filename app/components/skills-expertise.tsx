import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Server, Zap, Bot } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Globe className="h-6 w-6" />,
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
    skills: ["Node.js", "Express.js", "Python", "RESTful APIs", "Microservices", "OIDC Authentication"],
    description: "Building robust server-side applications and APIs with scalable architecture.",
  },
  {
    title: "Database Management",
    icon: <Database className="h-6 w-6" />,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Db2", "Database Design", "Query Optimization"],
    description: "Designing and managing efficient database systems for optimal performance.",
  },
  {
    title: "DevOps & Cloud",
    icon: <Zap className="h-6 w-6" />,
    skills: ["AWS", "IBM Cloud", "Docker", "CI/CD", "Git", "Linux", "Vercel", "Deployment", "Monitoring"],
    description: "Streamlining development workflows and deploying applications to the cloud.",
  },
  {
    title: "AI Automations",
    icon: <Bot className="h-6 w-6" />,
    skills: [
      "Machine Learning",
      "Natural Language Processing",
      "Watsonx.ai",
      "Milvus",
      "docling",
      "OpenAI API",
      "AI Integration",
      "Data Analysis",
    ],
    description: "Implementing AI solutions and automation workflows to solve complex business problems.",
  },
  {
    title: "Development Tools",
    icon: <Code className="h-6 w-6" />,
    skills: ["VS Code", "Git", "GitHub", "Postman", "Jest", "ESLint", "Prettier", "Figma"],
    description: "Utilizing modern development tools and workflows for efficient coding practices.",
  },
]

export default function SkillsExpertise() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {skillCategories.map((category) => (
        <Card key={category.title} className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">{category.icon}</div>
              {category.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">{category.description}</p>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
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

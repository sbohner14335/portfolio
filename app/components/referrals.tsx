import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const referrals = [
  {
    name: "Sarah Chen",
    role: "Senior Product Manager",
    company: "IBM",
    image: "/placeholder.svg?height=40&width=40",
    content:
      "Stephen consistently delivers high-quality solutions and has been instrumental in our AI automation initiatives. His expertise in watsonx.ai and ability to translate complex requirements into elegant code makes him an invaluable team member.",
    initials: "SC",
  },
  {
    name: "Michael Rodriguez",
    role: "Tech Lead",
    company: "IBM",
    image: "/placeholder.svg?height=40&width=40",
    content:
      "Working with Stephen on our full-stack projects has been exceptional. His deep understanding of both frontend and backend technologies, combined with his collaborative approach, consistently produces outstanding results.",
    initials: "MR",
  },
  {
    name: "Dr. Jennifer Walsh",
    role: "Computer Science Professor",
    company: "Marist College",
    image: "/placeholder.svg?height=40&width=40",
    content:
      "Stephen demonstrated exceptional technical skills and leadership during his time at Marist. His work on the student risk prediction dashboard showcased his ability to handle complex data modeling and create meaningful solutions.",
    initials: "JW",
  },
]

export default function Referrals() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {referrals.map((referral, index) => (
        <Card
          key={index}
          className="h-full group cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-primary/15 hover:-translate-y-2 hover:border-primary/30"
          style={{
            animationDelay: `${index * 150}ms`,
            animation: "slideInFromBottom 0.8s ease-out forwards",
          }}
        >
          <CardContent className="p-6 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary/5 group-hover:to-transparent">
            <div className="flex items-start gap-4">
              <Quote className="h-8 w-8 text-primary/20 flex-shrink-0 mt-1 transition-all duration-300 group-hover:text-primary/40 group-hover:scale-110" />
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed transition-all duration-300 group-hover:text-foreground/90">
                  "{referral.content}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 transition-all duration-300 group-hover:scale-110 group-hover:ring-2 group-hover:ring-primary/20">
                    <AvatarImage src={referral.image || "/placeholder.svg"} alt={referral.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      {referral.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="transition-all duration-300 group-hover:translate-x-1">
                    <p className="font-semibold text-sm transition-colors duration-300 group-hover:text-primary">
                      {referral.name}
                    </p>
                    <p className="text-xs text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70">
                      {referral.role} at {referral.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

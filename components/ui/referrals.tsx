import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const referrals = [
  {
    name: "Roberto Moriyón Villa",
    role: "Product Manager / Technical Product Owner",
    company: "IBM",
    image: "https://90ck8cgfuv.ufs.sh/f/AWmmVUCJvRdFbjsUC2lnKsS9QqOateIAlyWGmhZo01rvFL2u",
    content:
      "I've had the pleasure of working with Stephen on our team, I can't recommend him highly enough. He brings incredible energy to everything he does—always ready to contribute, collaborate, and go the extra mile. Beyond his positive attitude, Stephen stands out for his outstanding technical skills. He's a fast learner, a creative problem-solver, and has a strong focus on code quality and delivering real value. He doesn't just execute, he thinks strategically about what he's building and how to make it better. Working with him has truly elevated the team, professionally and personally. I'm confident he'll be a key asset to any project or organization he joins.",
    initials: "RMV",
  },
  {
    name: "Luke Harrison",
    role: "Full Stack Software Engineer",
    company: "IBM Research",
    image: "https://90ck8cgfuv.ufs.sh/f/AWmmVUCJvRdFgEUJ7nq3Eopb19MTAdHwB5WhSq0JQexUylRI",
    content:
      "I have had the pleasure of working alongside Steve, a highly skilled full stack software engineer, for the past few years. Steve's expertise in backend development, generative AI, and DevOps is truly remarkable. He consistently delivers high-quality solutions, demonstrating a deep understanding of complex systems and innovative technologies. His dedication, problem-solving skills, and collaborative spirit make him an invaluable asset to any team. I wholeheartedly recommend Steve for any challenging and dynamic role in software engineering.",
    initials: "LH",
  },
  {
    name: "Terri Lyons Smith",
    role: "Manager AI Client Zero",
    company: "IBM",
    image: "https://90ck8cgfuv.ufs.sh/f/AWmmVUCJvRdFKZG82r8eB4MF1xPwsYNn3RrHpzk9TuQLdamO",
    content:
      "I had the pleasure of having Stephen on my team as a software developer, where he excelled in building AI solutions using Watson Orchestrate and watsonx. Stephen is highly self-motivated, brings a consistently positive attitude, and is a true team player. His technical skills and collaborative spirit would make him a valuable asset to any development team.",
    initials: "TLS",
  },
]

export default function Referrals() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {referrals.map((referral, index) => (
        <Card
          key={referral.name}
          className="group h-full cursor-default transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-primary/30 hover:shadow-xl hover:shadow-primary/20"
          style={{
            animationDelay: `${index * 150}ms`,
            animation: "slideInFromBottom 0.8s ease-out forwards",
          }}
        >
          <CardContent className="flex h-full flex-col bg-transparent p-6 transition-all duration-300 group-hover:bg-linear-to-br group-hover:from-primary/5 group-hover:to-transparent">
            <div className="flex flex-1 flex-col items-center gap-4 text-center">
              <Quote className="size-8 text-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
              <p className="flex flex-1 items-center text-sm/6 text-muted-foreground transition-all duration-300 group-hover:text-foreground">
                &ldquo;{referral.content}&rdquo;
              </p>
              <div className="mt-auto flex flex-col items-center gap-3">
                <Avatar className="size-12 transition-all duration-300 group-hover:scale-110 group-hover:ring-2 group-hover:ring-primary/50">
                  <AvatarImage src={referral.image} alt={referral.name} />
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    {referral.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="transition-all duration-300">
                  <p className="text-sm font-semibold transition-colors duration-300 group-hover:text-primary">
                    {referral.name}
                  </p>
                  <p className="text-xs text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                    {referral.role} at {referral.company}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

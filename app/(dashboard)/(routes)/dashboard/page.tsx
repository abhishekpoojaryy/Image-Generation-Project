"use client";

import { UserButton } from "@clerk/nextjs";
import { ArrowRight, Code, ImageIcon, MessageSquare,Music,VideoIcon} from "lucide-react";
import Image from "next/image";
import { Card} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import { useRouter } from "next/navigation";

const tools = [
  // {
  //   label:"Conversation",
  //   icon:MessageSquare,
  //   color:"text-violet-500",
  //   bgcolor:"text-violet-500/10",
  //   href:"/conversation"
  // },
  // {
  //   label:"Music Generation",
  //   icon:Music,
  //   color:"text-emerald-500",
  //   bgcolor:"bg-emerald-500/10",
  //   href:"/music"
  // },
  {
    label:"Image Generation",
    icon:ImageIcon,
    color:"text-pink-700",
    bgcolor:"bg-pink-700/10",
    href:"/image"
  },
  // {
  //   label:"Video Generation",
  //   icon:VideoIcon,
  //   color:"text-orange-700",
  //   bgcolor:"bg-orange-700/10",
  //   href:"/video"
  // },
  // {
  //   label:"Code Generation",
  //   icon:Code,
  //   color:"text-green-700",
  //   bgcolor:"bg-green-700/10",
  //   href:"/code"
  // }
]
const DashboardPage = () => {
  const router =useRouter();
  return (
    <div>
    <div className="mb-8 space-y-4">
     <h2 className="text-2xl md:text-4xl font-bold text-center">
     Unleash Your Creativity With ImagiProCore
     </h2>
     <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
    Where Every Pixel Tells A Story
     </p>
    </div>
    <div className="px-4 md:px-20 lg:px-32 space-y-4">
     {tools.map((tool)=> (
       <Card
       onClick={() => router.push(tool.href)}
        key={tool.href}
        className="p-4 border-black/5 flex items-centre justify-between hower:shadow-md transition cursor-pointer"
        >
         <div className="flex items-center gap-x-4">
           <div className={cn("p-2 w-fit rounded-md", tool.bgcolor)}>
           <tool.icon className={cn("w-8 h-8",tool.color)} />
           </div>
           <div className="font-semibold">
            {tool.label}
           </div>
         </div>
         <ArrowRight className="w-5 h-5"/>
       </Card>
     ))}
    </div>
    </div>
  )
}
export default DashboardPage;

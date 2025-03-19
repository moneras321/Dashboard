"use client"

import { useState } from "react"
import { Search, Send, Paperclip, MoreHorizontal, User, Phone, Video, MessageSquare } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/Librory/card"
import { Input } from "@/components/ui/Librory/input"
import { Button } from "@/components/ui/Librory/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Librory/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Librory/tabs"

export function Messages() {
  const [activeChat, setActiveChat] = useState<string | null>("chat-1")
  const [messageText, setMessageText] = useState("")

  const contacts = [
    {
      id: "chat-1",
      name: "Sarah Johnson",
      role: "UI/UX Design Instructor",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Great question! Let me explain...",
      time: "2 days ago",
      online: true,
      unread: 0,
    },
    {
      id: "chat-2",
      name: "Alex Morgan",
      role: "JavaScript Instructor",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Don't forget to submit your assignment by Friday!",
      time: "Yesterday",
      online: false,
      unread: 1,
    },
    {
      id: "chat-3",
      name: "Michael Chen",
      role: "Data Science Instructor",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Here's the resource I mentioned in class.",
      time: "3 days ago",
      online: true,
      unread: 0,
    },
  ]

  const messages = {
    "chat-1": [
      {
        id: 1,
        sender: "user",
        text: "Hi Sarah, I have a question about the latest UI/UX assignment.",
        time: "Monday, 10:30 AM",
      },
      {
        id: 2,
        sender: "contact",
        text: "Hi there! Of course, what's your question?",
        time: "Monday, 10:35 AM",
      },
      {
        id: 3,
        sender: "user",
        text: "I'm having trouble understanding the user research section. Could you explain what methods we should be using?",
        time: "Monday, 10:38 AM",
      },
      {
        id: 4,
        sender: "contact",
        text: "Great question! Let me explain. For this assignment, you should focus on qualitative methods like user interviews and usability testing. The goal is to understand user behavior and pain points rather than collecting quantitative data.",
        time: "Monday, 10:45 AM",
      },
    ],
    "chat-2": [
      {
        id: 1,
        sender: "contact",
        text: "Hi there! Just a reminder that your JavaScript project is due this Friday.",
        time: "Yesterday, 2:15 PM",
      },
      {
        id: 2,
        sender: "contact",
        text: "Don't forget to submit your assignment by Friday!",
        time: "Yesterday, 2:16 PM",
      },
    ],
    "chat-3": [
      {
        id: 1,
        sender: "user",
        text: "Hello Michael, do you have any additional resources for the NumPy section?",
        time: "Monday, 3:20 PM",
      },
      {
        id: 2,
        sender: "contact",
        text: "Yes, I do! Here's the resource I mentioned in class: https://numpy.org/doc/stable/user/quickstart.html",
        time: "Monday, 4:05 PM",
      },
      {
        id: 3,
        sender: "user",
        text: "Thank you! This is very helpful.",
        time: "Monday, 4:10 PM",
      },
    ],
  }

  const activeContact = contacts.find((contact) => contact.id === activeChat)
  const activeMessages = activeChat ? messages[activeChat as keyof typeof messages] : []

  const handleSendMessage = () => {
    if (messageText.trim() === "") return

    // In a real app, this would send the message to the server
    alert(`Message sent: ${messageText}`)
    setMessageText("")
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Messages</h1>
        <p className="text-muted-foreground">Communicate with your instructors and classmates</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card className="h-[calc(100vh-12rem)]">
            <CardHeader className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search messages..." className="pl-9" />
              </div>
            </CardHeader>
            <Tabs defaultValue="instructors">
              <TabsList className="w-full">
                <TabsTrigger value="instructors" className="flex-1">
                  Instructors
                </TabsTrigger>
                <TabsTrigger value="classmates" className="flex-1">
                  Classmates
                </TabsTrigger>
              </TabsList>
              <TabsContent value="instructors" className="p-0">
                <div className="overflow-y-auto h-[calc(100vh-18rem)]">
                  {contacts.map((contact) => (
                    <div
                      key={contact.id}
                      className={`flex items-start gap-3 p-4 cursor-pointer hover:bg-muted/50 ${activeChat === contact.id ? "bg-muted" : ""}`}
                      onClick={() => setActiveChat(contact.id)}
                    >
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={contact.avatar} alt={contact.name} />
                          <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {contact.online && (
                          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium truncate">{contact.name}</h3>
                          <span className="text-xs text-muted-foreground">{contact.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{contact.role}</p>
                        <p className="text-sm truncate">{contact.lastMessage}</p>
                      </div>
                      {contact.unread > 0 && (
                        <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center text-xs text-primary-foreground">
                          {contact.unread}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="classmates">
                <div className="flex flex-col items-center justify-center h-[calc(100vh-18rem)] p-4 text-center">
                  <User className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="font-medium mb-2">No Classmates Yet</h3>
                  <p className="text-sm text-muted-foreground">
                    Join a study group or collaborative project to connect with classmates.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card className="h-[calc(100vh-12rem)] flex flex-col">
            {activeChat && activeContact ? (
              <>
                <CardHeader className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={activeContact.avatar} alt={activeContact.name} />
                        <AvatarFallback>{activeContact.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{activeContact.name}</h3>
                        <p className="text-xs text-muted-foreground">{activeContact.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Phone className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Video className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-4">
                    {activeMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}
                        >
                          <p>{message.text}</p>
                          <p
                            className={`text-xs mt-1 ${
                              message.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                            }`}
                          >
                            {message.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <div className="p-4 border-t">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Paperclip className="h-5 w-5" />
                    </Button>
                    <Input
                      placeholder="Type a message..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSendMessage()
                        }
                      }}
                    />
                    <Button size="icon" onClick={handleSendMessage}>
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="font-medium mb-2">No Conversation Selected</h3>
                <p className="text-sm text-muted-foreground">Select a conversation from the list to start messaging.</p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}


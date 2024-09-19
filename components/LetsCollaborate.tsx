'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";



const formSchema = z.object({
  fullname: z
    .string()
    .min(6, { message: "Full name must be at least 6 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .regex(/^\d{11}$/, { message: "Phone number must be exactly 11 digits." }),
  subject: z
    .string()
    .min(6, { message: "Subject must be at least 6 characters." })
    .max(30, { message: "Subject must not exceed 30 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});
 

const LetsCollaborate = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
 function onSubmit(data: z.infer<typeof formSchema>) {
toast("Message sent!.");

 }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='mt-4 bg-[#179bd7]'>Let&apos;s Collaborate</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Let&apos;s Collaborate!</DialogTitle>
          <DialogDescription className="text-left">
            <div>
              <Form {...form} >
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-3 pt-6'>
                  <FormField
                    control={form.control}
                    name='fullname'
                    render={({ field }) => (
                      <FormItem>
                            <FormLabel className="text-left">Fullname</FormLabel>
                        <FormControl>
                          <Input placeholder='Eg. Samuel Dike' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='fullname'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fullname</FormLabel>
                        <FormControl>
                          <Input placeholder='Eg. Samuel Dike' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='fullname'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fullname</FormLabel>
                        <FormControl>
                          <Input placeholder='Eg. Samuel Dike' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='fullname'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fullname</FormLabel>
                        <FormControl>
                          <Input placeholder='Eg. Samuel Dike' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='fullname'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fullname</FormLabel>
                        <FormControl>
                          <Input placeholder='Eg. Samuel Dike' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type='submit'>Submit</Button>
                </form>
              </Form>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default LetsCollaborate
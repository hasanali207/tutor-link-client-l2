'use client';
 import Link from 'next/link';

import {
    Form,
    FormField,
    FormLabel,
    FormControl,
    FormItem,
    FormMessage,
   
   
   } from "@/components/ui/form"
   import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import {Button} from '@/components/ui/button'
import { MoveLeft } from 'lucide-react';


const StudentRegisterForm =()=>{
    const form =useForm()

    const onSubmit : SubmitHandler<FieldValues> = ( data )=>{

    }
    return (
       <div className ="md:w-[530px] w-[350px] shadow-[0px_0px_20px_theme(colors.blue.600)]  overflow-hidden rounded-lg border border-[#066ccb] py-6 px-8 bg-gray-100 dark:border-zinc-700 dark:bg-zinc-900">
         <Form {...form}>
           
            <form onSubmit={form.handleSubmit(onSubmit)}>
            <h2 className="text-2xl font-bold text-blue-700 text-center">Register as Student 🎓</h2>
            <p className="text-sm text-blue-400 text-center my-1">
            Start learning with verified educators from anywhere at any time.
            </p>
            <FormField
            control={form.control}
            name="name"
            render={(field) => (
            <FormItem>
                <FormLabel className=" text-base mt-6">Name</FormLabel>
                      <FormControl>
                        <Input
                          className="p-5 border-[#066ccb]"
                          placeholder="name"
                          required
                          {...field}
                          value={field.value || ''}
                        />
                      </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="name"
            render={(field) => (
            <FormItem>
                 <FormLabel className=" text-base mt-4">Email</FormLabel>
                      <FormControl>
                        <Input
                          className="p-5 border-[#066ccb]"
                          placeholder="Email"
                          required
                          {...field}
                          value={field.value || ''}
                        />
                      </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />
        
        <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base mt-4">Role</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className=" border-[#066ccb] w-full">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Student">Student</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                    control={form.control}
                    name="name"
                    render={(field) => (
                    <FormItem>
                        <FormLabel className=" text-base mt-4">Password</FormLabel>
                            <FormControl>
                                <Input
                                className="p-5 border-[#066ccb]"
                                placeholder="Password"
                                required
                                {...field}
                                value={field.value || ''}
                                />
                            </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />

        <div className="text-center my-4">
            <Button type="submit" className="bg-blue-600 w-full text-white hover:bg-blue-700 transition duration-300">Register</Button>
        </div>
            
        </form>
        </Form>
        <p className=" text-center text-base mt-6">
            Already have an account?{' '}
            <Link
              href="/login"
              className=" text-lg font-semibold text-[#066ccb] hover:underline "
            >
              Login
            </Link>
          </p>

          <p className=" flex items-center justify-center mt-6">
          <Link
            href="/"
            className="flex gap-3 items-center text-base font-semibold text-gray-400 hover:text-[#066ccb] "
          >
            <MoveLeft /> Back to Home
          </Link>
        </p>
        
       </div>

    )
}


// }
    


export default StudentRegisterForm;
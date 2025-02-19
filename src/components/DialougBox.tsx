"use client"

import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { z } from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';
import InputContainer from './InputContainer';
import UserStore from '@/store/userstore';
import Image from 'next/image';

  const formSchema = z.object({
    rank: z.number()
      .min(1, { message: "Rank must be between 1 and 100" })
      .max(100, { message: "Rank must be between 1 and 100" }),

    percentile: z.number()
      .min(1, { message: "Percentile must be between 1 and 100" })
      .max(100, { message: "Percentile must be between 1 and 100" }),

    marks: z.number()
      .min(1, { message: "Marks must be between 1 and 15" })
      .max(15, { message: "Marks must be between 1 and 15" }),
  });
  
export default function UpdateData() {
  const [open, setOpen] = useState<boolean>(false)
  const user = UserStore((state)=> state.user) 
  const updateUserMarks = UserStore((state)=> state.updateMarks) 
  const {
    handleSubmit,
      setValue,
      trigger,
      formState: { errors },
      watch
    } = useForm({
      resolver: zodResolver(formSchema),
    });

    useEffect(() => {
      setValue("rank", user.rank)
      setValue("percentile", user.percentile)
      setValue("marks", user.marks)
    }, [user, setValue])
    

    const formValues = watch()

    function onSubmit(values: z.infer<typeof formSchema>) {
      updateUserMarks(values)
      setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className=" flex-none w-[100px] h-[45px] p-3 flex items-center justify-center rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold" onClick={(()=> setOpen(true))} >
            update
        </DialogTrigger>
        <DialogContent aria-describedby={undefined}>
          <DialogHeader className=" w-full flex flex-row items-center justify-between">
                <DialogTitle>Update user data</DialogTitle>
                <div className=' w-[40px] h-[40px] '>
                  <Image width={40} height={40} src="/html.svg" alt='html' />
                </div>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <InputContainer
              placeholder="Rank"
              type="number"
              ind={1}
              defaultValue={String(formValues.rank)}
              getValue={(value) => {
                setValue("rank", Number(value));
                trigger("rank"); // Validate onBlur
              }}
              error={errors.rank?.message}
            />

            <InputContainer
              placeholder="Percentile"
              ind={2}
              type="number"
              defaultValue={String(formValues.percentile)}
              getValue={(value) => {
                setValue("percentile", Number(value));
                trigger("percentile");
              }}
              error={errors.percentile?.message}
            />

            <InputContainer
              placeholder="Marks"
              type="number"
              ind={3}
              defaultValue={String(formValues.marks)}
              getValue={(value) => {
                setValue("marks", Number(value));
                trigger("marks");
              }}
              error={errors.marks?.message}
            />

            <div className=' flex items-center justify-end gap-2'>
              <Button className="w-[100px] bg-secondary text-primary hover:bg-primary/10" onClick={()=> setOpen(false)}>
                cancel
              </Button>
              <Button type="submit" className=" w-[100px] bg-blue-700 hover:bg-blue-800">
                Submit
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>      
    )
  }
  
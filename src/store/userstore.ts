"use client"

import { number, string } from 'zod';
import { create } from 'zustand'

type UserData = {
    name: string;
    profileImage: string;
    rank: number;
    percentile: number;
    marks: number;
}

type UserMarks = {
    rank: number;
    percentile: number;
    marks: number;
}

type Store = {
  user: UserData;
  updateMarks: (data:UserMarks) => void;
  initializeUser: () => void;
}

const getInitialData = ()=> {
    if (typeof window !== "undefined") {
        const data = localStorage.getItem("user")
        if(data){
            return JSON.parse(data) as UserData
        }
        const newUser = {
            name: "Mohammad Ashfaq",
            profileImage: "/avatar.png",
            rank: 1,
            percentile: 50,
            marks: 10,
        };
        localStorage.setItem("user", JSON.stringify(newUser))
        return newUser
    }
    return {
        name: "Mohammad Ashfaq",
        profileImage: "/avatar.png",
        rank: 1,
        percentile: 50,
        marks: 10,
    };
}

const storeData = ( newUser: UserData)=>{
    localStorage.setItem( "user", JSON.stringify( newUser))
}

const UserStore = create<Store>()((set) => ({
  user: {
        name: "Mohammad Ashfaq",
        profileImage: "/avatar.png",
        rank: 1,
        percentile: 50,
        marks: 10,
    },
  initializeUser: () => {
    set({user: getInitialData()})
  }, 
  updateMarks: (data)=> {

    set((state)=> {
        const updatedUser = {...state.user, ...data}
        if (typeof window !== "undefined") {
            localStorage.setItem("user", JSON.stringify(updatedUser));
        }
        return { user: updatedUser };
    })
  }
}))
export default UserStore;

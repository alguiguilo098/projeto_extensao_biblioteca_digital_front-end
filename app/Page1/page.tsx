'use client'
import ChatBar from "@/componets/ChatBar";
import { Logo } from "@/componets/Logo";
import { SearchBar } from "@/componets/SearchBar";
import { Box, Button, Stack, TextField } from "@mui/material";
import Image from "next/image";
export default function CadastroPage() {
    return (
        <div>
            <SearchBar />
        
            <Stack direction={"row"} sx={{ pt: 112, justifyContent: "center" }}>
                <ChatBar />
                <ChatBar />
            </Stack>
        </div>

    )
}
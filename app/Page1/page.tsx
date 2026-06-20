import { Box, Container, Paper, Stack, Tab, Tabs } from "@mui/material";
import { SearchBar } from "@/componets/SearchBar";
import ChatBar from "@/componets/ChatBar";
import Image from "next/image";
import SearchInfo from "@/componets/SearchInfo";
export default function Page1() {
    return (
        <div>
            <SearchBar />

            <Stack spacing={3} direction="row">

                <Image width={1100} height={880} src="/imagem_teste03.png" alt="Imagem de teste" />

            </Stack>

            <Stack spacing={3} direction="row">

                <ChatBar />
                <SearchInfo total={42} termo="exemplo" />
            </Stack>
        </div>
    )
}
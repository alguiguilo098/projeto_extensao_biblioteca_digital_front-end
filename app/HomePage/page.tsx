'use client'

import { Logo } from '@/componets/Logo'
import {
  Box,
  Button,
  Container,
  MenuItem,
  Paper,
  Select,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { TextPeriodic } from '@/componets/TextPeriodic'
import { ButtonBar } from '@/componets/ButtonBar'
export default function Home() {
  const [tab, setTab] = useState(0)
  const router = useRouter()
  const anos = Array.from({ length: 2026 - 1900 + 1 }, (_, i) => 2026 - i)
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f3f3f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <Logo width={250} height={250} />
          
          {/* Tabs + Card */}
          <Box sx={{ width: '100%', maxWidth: 760 }}>
            <Tabs
              value={tab}
              onChange={(e, value) => setTab(value)}
              sx={{
                minHeight: 40,
                '& .MuiTabs-indicator': {
                  backgroundColor: '#ff6b6b',
                },
              }}
            >
              <Tab
                label="Periódico"
                sx={{
                  textTransform: 'none',
                  color: tab === 0 ? '#ff6b6b' : '#9ca3af',
                }}
              />
              <Tab
                label="Período / local"
                onClick={() => {
                  router.push
                  ('/HomePage2')
                }}
                sx={{
                  textTransform: 'none',
                  color: tab === 1 ? '#ff6b6b' : '#9ca3af',
                }}
              />
            </Tabs>

            <Paper
              elevation={0}
              sx={{
                border: '1px solid #ececec',
                borderRadius: 2,
                p: 2,
                mt: -1,
                backgroundColor: '#fff',
              }}
            >
              {/* Primeiro select */}
              <Select
                fullWidth
                displayEmpty
                defaultValue=""
                sx={{
                  mb: 2,
                  height: 46,
                  color: '#94a3b8',
                }}
              >
                <MenuItem value="">
                  Selecione o periódico...
                </MenuItem>
                <MenuItem value="1">Periódico 1</MenuItem>
                <MenuItem value="2">Periódico 2</MenuItem>
              </Select>

              {/* Linha */}
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  mb: 2,
                  flexWrap: 'wrap',
                }}
              >
                <Select
                  displayEmpty
                  defaultValue=""
                  sx={{
                    flex: 1,
                    minWidth: 220,
                    height: 46,
                    color: '#94a3b8',
                  }}
                >
                  <MenuItem value="">
                    Selecione o período...
                  </MenuItem>
                  {anos.map((ano) => (
                    <MenuItem key={ano} value={ano}>
                      {ano}
                    </MenuItem>
                  ))}
                </Select>

                <TextField
                  placeholder="Digite os termos de busca..."
                  fullWidth
                  sx={{
                    flex: 1,
                    '& .MuiOutlinedInput-root': {
                      height: 46,
                    },
                  }}
                />
              </Box>

              {/* Botão */}
              <ButtonBar onClick={()=>{
                router.push("/CadastroPage")
              }} />
            </Paper>

            {/* Texto inferior */}
            <TextPeriodic />            
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
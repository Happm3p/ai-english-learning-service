'use client';

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Stack,
  Paper,
  Fade,
} from '@mui/material';
import {
  FlashOn as FlashOnIcon,
  Analytics as AnalyticsIcon,
  TrendingUp as TrendingUpIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Header */}
      <AppBar position="fixed" elevation={0} sx={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ height: 80 }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 800, color: 'primary.main', letterSpacing: '-0.02em' }}>
              AI English Corrector
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button color="inherit" component={Link} href="/login" sx={{ color: 'text.secondary' }}>
                ログイン
              </Button>
              <Button variant="contained" color="primary" component={Link} href="/register" sx={{ px: 3 }}>
                無料で始める
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar sx={{ height: 80 }} /> {/* Spacer */}

      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 12, md: 20 },
          pb: { xs: 12, md: 20 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Fade in={true} timeout={1000}>
            <Box>
              <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '4.5rem' }, lineHeight: 1.1, mb: 3 }}>
                AIで、英語はもっと<br />
                <Box component="span" sx={{ color: 'secondary.main' }}>自由になる。</Box>
              </Typography>
              <Typography variant="h5" color="text.secondary" paragraph sx={{ mb: 6, fontWeight: 400, lineHeight: 1.8, maxWidth: '600px', mx: 'auto' }}>
                Claude Haiku 4.5搭載。<br sx={{ display: { md: 'none' } }} />
                あなたの英文を瞬時に添削し、<br />
                ネイティブのような表現力を手に入れましょう。
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                <Button variant="contained" size="large" color="primary" endIcon={<ArrowForwardIcon />} component={Link} href="/register" sx={{ px: 5, py: 1.5, fontSize: '1.1rem' }}>
                  無料で始める
                </Button>
                <Button variant="outlined" size="large" color="primary" component={Link} href="#features" sx={{ px: 5, py: 1.5, fontSize: '1.1rem', borderColor: 'divider', color: 'text.primary' }}>
                  詳しく見る
                </Button>
              </Stack>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Features Section */}
      <Box id="features" sx={{ py: { xs: 10, md: 16 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 10, textAlign: 'center' }}>
            <Typography variant="overline" color="secondary" sx={{ fontWeight: 700, letterSpacing: '0.1em' }}>
              FEATURES
            </Typography>
            <Typography variant="h3" component="h2" sx={{ mt: 1 }}>
              Why Choose Us?
            </Typography>
          </Box>
          <Grid container spacing={6}>
            {[
              {
                icon: <FlashOnIcon sx={{ fontSize: 40 }} color="secondary" />,
                title: 'Instant Feedback',
                description: '入力から数秒で添削完了。思考を止めずに学習を継続できます。',
              },
              {
                icon: <AnalyticsIcon sx={{ fontSize: 40 }} color="secondary" />,
                title: 'Deep Insight',
                description: '単なる修正だけでなく、「なぜ」修正が必要なのかを丁寧に解説します。',
              },
              {
                icon: <TrendingUpIcon sx={{ fontSize: 40 }} color="secondary" />,
                title: 'Growth Log',
                description: '学習履歴を自動保存。過去のミスを振り返り、確実なスキルアップをサポート。',
              },
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ p: 2 }}>
                  <Box sx={{ mb: 3, p: 2, bgcolor: 'rgba(9, 132, 227, 0.1)', borderRadius: '50%', width: 'fit-content' }}>
                    {feature.icon}
                  </Box>
                  <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 700 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* How it works Section */}
      <Box sx={{ py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 10, textAlign: 'center' }}>
            <Typography variant="overline" color="secondary" sx={{ fontWeight: 700, letterSpacing: '0.1em' }}>
              PROCESS
            </Typography>
            <Typography variant="h3" component="h2" sx={{ mt: 1 }}>
              How it works
            </Typography>
          </Box>
          <Grid container spacing={4} justifyContent="center">
            {[
              { step: '01', title: '英文を入力', desc: '添削したい文章を入力フォームに入れます。' },
              { step: '02', title: 'AIが添削', desc: 'Claude Haiku 4.5が瞬時に修正案と解説を生成します。' },
              { step: '03', title: '学習・復習', desc: '解説を読み、履歴として保存して後で復習します。' },
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 5,
                    textAlign: 'center',
                    height: '100%',
                    bgcolor: 'white',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: 'secondary.main',
                    }
                  }}
                >
                  <Typography variant="h2" color="text.secondary" sx={{ fontWeight: 800, mb: 3, opacity: 0.1, fontSize: '4rem' }}>
                    {item.step}
                  </Typography>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {item.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Bottom CTA */}
      <Box sx={{ py: { xs: 10, md: 16 }, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
            Ready to improve your English?
          </Typography>
          <Typography variant="h6" sx={{ mb: 6, opacity: 0.8, fontWeight: 400 }}>
            登録は無料。クレジットカードも不要です。
          </Typography>
          <Button variant="contained" color="secondary" size="large" component={Link} href="/register" sx={{ px: 8, py: 2, fontSize: '1.2rem', bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } }}>
            今すぐ無料で試す
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 6, bgcolor: '#2D3436', color: 'rgba(255,255,255,0.6)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} AI English Corrector.
            </Typography>
            <Stack direction="row" spacing={3}>
              <Link href="#" style={{ color: 'inherit', textDecoration: 'none' }}>利用規約</Link>
              <Link href="#" style={{ color: 'inherit', textDecoration: 'none' }}>プライバシーポリシー</Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

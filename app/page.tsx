"use client";
import Script from "next/script";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, MessageCircle, Ruler, ShieldCheck, Sparkles, Star, Phone } from "lucide-react";
declare global {
  interface Window {
gtag?: (...args: unknown[]) => void;
fbq?: (...args: unknown[]) => void;
  }
}
const WHATSAPP_URL = "https://wa.me/5584987458798?text=Ol%C3%A1%2C%20vim%20pela%20landing%20page%20da%20REFLECT%20M%C3%93VEIS%20PLANEJADOS%20E%20PORTAS%20ESPECIAIS%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

export default function ReflectLandingPage() {
  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#2D261F]">
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
      >
        {`
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');

      fbq('init', '1292324585795953');
      fbq('track', 'PageView');
    `}
      </Script>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NS53PD6KYW"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-NS53PD6KYW');
  `}
      </Script>
        <section className="relative overflow-hidden px-6 py-6 md:px-12 lg:px-20">
          <nav className="mx-auto flex max-w-7xl items-center justify-between">
            <div className="text-sm md:text-xl font-semibold tracking-wide">
              <img
  src="/images/logo/logo-reflect.png"
  alt="Reflect Ambientes Planejados"
  className="h-20 md:h-28 w-auto object-contain"
/>
</div>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-full bg-[#6B4F3B] px-5 py-3 text-white hover:bg-[#553E2F]">
              Falar no WhatsApp
            </a>
          </nav>

          <div className="mx-auto grid max-w-7xl items-center gap-16 py-16 md:py-24 md:grid-cols-2 lg:py-28">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm text-[#6B4F3B] shadow-sm">
                <Sparkles size={16} /> Móveis planejados e portas especiais sob medida
              </div>

              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
                  Móveis planejados e portas especiais que elevam o padrão do seu projeto.
                </h1>
                <p className="max-w-xl text-lg leading-8 text-[#6B6258]">
                  Design minimalista, acabamento premium e fabricação sob medida para residências, escritórios e projetos de alto padrão.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center rounded-full bg-[#6B4F3B] px-7 text-base text-white hover:bg-[#553E2F]">
                  Solicitar orçamento <ArrowRight className="ml-2" size={18} />
                </a>
                <a href="#projetos" className="inline-flex h-12 items-center justify-center rounded-full border border-[#CDBCA8] bg-white/40 px-7 text-base hover:bg-white">
                  Ver diferenciais
                </a>
              </div>
<div className="grid max-w-xl grid-cols-3 gap-4 pt-4 text-sm text-[#6B6258]">
                <div><strong className="block text-2xl text-[#2D261F]">Sob medida</strong>para cada projeto</div>
                <div><strong className="block text-2xl text-[#2D261F]">Premium</strong>acabamento refinado</div>
                <div><strong className="block text-2xl text-[#2D261F]">WhatsApp</strong>atendimento rápido</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/5] min-h-[420px] md:min-h-[680px]"
            >
              <img
                src="/images/cozinhas/Cozinha-1.jpg"
                alt="Cozinha planejada Reflect"
                className="absolute inset-0 h-full w-full rounded-[2rem] object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        <section id="projetos" className="px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8A6A4F]">
                Projetos reais
              </p>
              <h2 className="text-3xl font-semibold md:text-5xl">
                Planejados e portas especiais para ambientes sofisticados.
              </h2>
              <p className="text-lg leading-8 text-[#6B6258]">
                Criamos soluções que unem estética, funcionalidade e acabamento premium.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="overflow-hidden rounded-[2rem] bg-white shadow-lg">
                <img src="/images/cozinhas/Cozinha-1.jpg" alt="Cozinha planejada" className="h-[320px] w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold">Cozinhas planejadas</h3>
                  <p className="mt-2 text-[#6B6258]">Funcionalidade, sofisticação e acabamento premium.</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] bg-white shadow-lg">
                <img src="/images/closets/Closet.jpg" alt="Closet planejado" className="h-[320px] w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold">Closets exclusivos</h3>
                  <p className="mt-2 text-[#6B6258]">Organização inteligente com design sofisticado.</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] bg-white shadow-lg">
                <img src="/images/portas/Porta divisoria.jpg" alt="Porta especial" className="h-[320px] w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold">Portas especiais</h3>
                  <p className="mt-2 text-[#6B6258]">Elegância e personalidade para cada ambiente.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#2D261F] px-6 py-20 text-white md:px-12 lg:px-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D9C7B3]">Para quem é</p>
              <h2 className="text-3xl font-semibold md:text-5xl">Perfeito para quem busca exclusividade e acabamento superior.</h2>
            </div>
            <div className="grid gap-4">
              {["Residências de alto padrão", "Projetos assinados por arquitetos", "Ambientes comerciais sofisticados", "Reformas que precisam de acabamento diferenciado", "Clientes que valorizam design, durabilidade e instalação especializada"].map((text) => (
                <div key={text} className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                  <CheckCircle className="mt-1 shrink-0 text-[#D9C7B3]" size={20} />
                  <p className="text-white/85">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#E8D8C5] p-8 md:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8A6A4F]">Orçamento rápido</p>
                <h2 className="text-3xl font-semibold md:text-5xl">Receba uma orientação personalizada para o seu projeto.</h2>
                <p className="text-lg leading-8 text-[#6B6258]">Clique no botão abaixo, envie as medidas ou fotos do ambiente e fale com nossa equipe pelo WhatsApp.</p>
              </div>
              <div className="rounded-3xl bg-white/70 p-6 shadow-sm">
                <div className="space-y-4">
                  {["1. Informe o móvel ou porta desejada", "2. Envie medidas ou referências", "3. Receba atendimento personalizado"].map((step) => (
                    <div key={step} className="rounded-2xl bg-white p-4 text-[#6B6258] shadow-sm">{step}</div>
                  ))}
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center rounded-full bg-[#6B4F3B] px-7 py-4 text-base text-white hover:bg-[#553E2F]">
                    <Phone className="mr-2" size={18} /> Chamar no WhatsApp agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="px-6 pb-10 text-center text-sm text-[#6B6258] md:px-12 lg:px-20">
          <p>REFLECT MÓVEIS PLANEJADOS E PORTAS ESPECIAIS · Soluções sob medida</p>
          <p className="mt-2">Atendimento via WhatsApp · Natal/RN e região</p>
        </footer>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-white shadow-2xl"
        >
          <MessageCircle size={22} />
          WhatsApp
        </a>
      </main>
      );
      }
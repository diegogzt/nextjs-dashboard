"use client";

import Image from "next/image";
import Footer from "@/app/ui/footer/footer";
import { Card, CardContent } from "@/app/ui/cards/card";
import {
  ArrowRight,
  BarChart3,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Star,
  Menu,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/app/ui/button";
import type React from "react";
import { motion } from "framer-motion";
import Navigation from "@/app/ui/welcome/nav";
import { PricingCard } from "@/app/ui/welcome/pricing-card";
import Link from "next/link";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cardHeight, setCardHeight] = useState<number>(0);
  const securityCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (securityCardRef.current) {
      setCardHeight(securityCardRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <header>
        <Navigation />
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-96 lg:pt-0 h-dvh flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Tu panel de control
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {" "}
                  intuitivo
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-xl text-gray-400 leading-relaxed"
              >
                Gestiona y visualiza datos de manera eficiente. Simplifica la
                toma de decisiones con análisis en tiempo real y una interfaz
                moderna diseñada para profesionales.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="bg-gray-900 text-gray-300/90 hover:bg-gray-200 hover:text-black px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Comenzar Gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button className="bg-transparent border border-gray-700 text-white hover:bg-gray-900 hover:border-gray-600 px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
                Ver Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="flex items-center space-x-8 pt-4"
            >
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[
                    // Colores más sobrios y acordes a la paleta del sitio
                    "bg-gradient-to-r from-gray-600 to-lime-500/70",
                    "bg-gradient-to-r from-gray-700 to-cyan-600/70",
                    "bg-gradient-to-r from-gray-700 to-fuchsia-600/70",
                    "bg-gradient-to-r from-gray-700 to-yellow-500/60",
                  ].map((color, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full border-2 border-black ${color}`}
                    />
                  ))}
                </div>
                <span className="text-gray-400 text-sm">
                  +2,500 usuarios activos
                </span>
              </div>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-lime-400 text-lime-400"
                  />
                ))}
                <span className="text-gray-400 text-sm ml-2">4.9/5</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-10, 0, -10] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-600/20 rounded-3xl blur-3xl" />
            <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-3xl p-4 border border-gray-800/50 shadow-2xl">
              <Image
                src="/desktop-dashboard.png"
                alt="DashPilot Dashboard Preview"
                width={700}
                height={500}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="container mx-auto px-6  pt-96 lg:pt-0 py-20"
      >
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold text-white"
          >
            Características Principales
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Herramientas poderosas diseñadas para maximizar tu productividad y
            toma de decisiones
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: BarChart3,
              title: "Análisis en Tiempo Real",
              description:
                "Visualiza tus datos con gráficos y métricas actualizadas automáticamente.",
            },
            {
              icon: Shield,
              title: "Seguridad Avanzada",
              description:
                "Protección de datos de nivel empresarial con encriptación end-to-end y autenticación multifactor.",
            },
            {
              icon: Users,
              title: "Colaboración en Equipo",
              description:
                "Comparte dashboards, asigna permisos y colabora en tiempo real con tu equipo de trabajo.",
            },
            {
              icon: TrendingUp,
              title: "Predicciones IA",
              description:
                "Obtén insights predictivos y recomendaciones inteligentes basadas en tus datos históricos.",
            },
            {
              icon: Zap,
              title: "Integración Rápida",
              description:
                "Conecta con más de 100 fuentes de datos diferentes en minutos, no en días.",
            },
            {
              icon: BarChart3,
              title: "Reportes Automáticos",
              description:
                "Genera y programa reportes personalizados que se envían automáticamente a tu equipo.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <Card
                ref={
                  feature.title === "Seguridad Avanzada"
                    ? securityCardRef
                    : null
                }
                className="bg-gray-900/50 backdrop-blur-sm border-gray-800/50 hover:bg-gray-800/50 hover:border-gray-700/50 transition-all duration-300 hover:scale-105 group"
                style={cardHeight > 0 ? { height: cardHeight } : {}}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="relative right-6 w-12 h-12 rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:bg-gray-700/50 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-lime-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-6 py-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-white">Planes y Precios</h2>
          <p id="pricing" className="text-xl text-gray-400 max-w-2xl mx-auto">
            Elige el plan perfecto para tu equipo y comienza a transformar tus
            datos hoy mismo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Componente para las cartas de precios */}
          <PricingCard
            title="Básico"
            subtitle="Perfecto para equipos pequeños"
            price="$29"
            priceNote="/mes"
            buttonText="Comenzar Gratis"
            buttonClassName="bg-transparent border border-gray-700 text-white hover:bg-gray-900 hover:border-gray-600 transition-all duration-300"
            features={[
              "Hasta 5 dashboards",
              "10GB de almacenamiento",
              "Actualizaciones cada hora",
              "Soporte por email",
              "Exportación PDF/Excel",
              "Hasta 3 usuarios",
            ]}
          />
          <PricingCard
            title="Profesional"
            subtitle="Ideal para equipos en crecimiento"
            price="$79"
            priceNote="/mes"
            buttonText="Comenzar Prueba"
            buttonClassName="bg-lime-400 text-black hover:bg-lime-300 font-semibold transition-all duration-300 hover:scale-105"
            features={[
              "Dashboards ilimitados",
              "100GB de almacenamiento",
              "Actualizaciones en tiempo real",
              "Soporte prioritario 24/7",
              "API personalizada",
              "Hasta 15 usuarios",
              "Alertas automáticas",
              "Integraciones avanzadas",
            ]}
            highlight
            highlightText="Más Popular"
          >
            <h4 className="font-semibold text-white">Todo en Básico, más:</h4>
          </PricingCard>
          <PricingCard
            title="Enterprise"
            subtitle="Para organizaciones grandes"
            price="$199"
            priceNote="/mes"
            buttonText="Contactar Ventas"
            buttonClassName="bg-transparent border border-gray-700 text-white hover:bg-gray-900 hover:border-gray-600 transition-all duration-300"
            features={[
              "Almacenamiento ilimitado",
              "Usuarios ilimitados",
              "Soporte dedicado",
              "Implementación personalizada",
              "SSO y seguridad avanzada",
              "Análisis predictivo con IA",
              "Reportes personalizados",
              "SLA garantizado 99.9%",
            ]}
          >
            <h4 className="font-semibold text-white">
              Todo en Profesional, más:
            </h4>
          </PricingCard>
        </div>

        <div className="text-center mt-12 flex flex-col items-center">
          <p className="text-gray-400 mb-4">¿Necesitas algo diferente?</p>
          <Link
            href="/contact"
            className="bg-transparent border pt-3 px-4 pb-2  rounded-lg border-gray-700 text-white hover:bg-gray-900 hover:border-gray-600"
          >
            Hablar con un Especialista
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-3xl p-12 text-center border border-gray-800/50 backdrop-blur-sm"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            ¿Listo para transformar tu gestión de datos?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Únete a miles de profesionales que ya están tomando mejores
            decisiones con DashPilot
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gray-900  text-gray-300/90 hover:bg-gray-200 hover:text-black px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Comenzar Prueba Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link
              href="/contact"
              className="bg-transparent border pt-3 rounded-lg px-4 pt-2 pb-2 ounded-lg border-gray-700 text-white hover:bg-gray-900 hover:border-gray-600"
            >
              Hablar con ventas
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

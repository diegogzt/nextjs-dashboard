"use client";
import { Card, CardContent } from "@/app/ui/cards/card";
import { Button } from "@/app/ui/button";
import type React from "react";

export interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  priceNote?: string;
  buttonText: string;
  buttonClassName?: string;
  features: string[];
  highlight?: boolean;
  highlightText?: string;
  children?: React.ReactNode;
}

export function PricingCard({
  title,
  subtitle,
  price,
  priceNote,
  buttonText,
  buttonClassName,
  features,
  highlight,
  highlightText,
  children,
}: PricingCardProps) {
  return (
    <Card
      className={`bg-gray-900/50 backdrop-blur-sm pt-6 border-gray-800/50 transition-all duration-300 hover:scale-105 relative ${
        highlight
          ? "border-lime-400/50 hover:border-lime-400/70"
          : "hover:bg-gray-800/50 hover:border-gray-700/50"
      }`}
    >
      {highlight && highlightText && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-lime-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
            {highlightText}
          </span>
        </div>
      )}
      <CardContent className="p-8 space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-gray-400">{subtitle}</p>
        </div>
        <div className="space-y-1">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-white">{price}</span>
            {priceNote && (
              <span className="text-gray-400 ml-2">{priceNote}</span>
            )}
          </div>
          <p className="text-sm text-gray-500">Por usuario</p>
        </div>
        <Button className={`w-full ${buttonClassName || ""}`}>
          {buttonText}
        </Button>
        <div className="space-y-4">
          {children}
          <h4 className="font-semibold text-white">
            Características incluidas:
          </h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-lime-400 rounded-full mr-3 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

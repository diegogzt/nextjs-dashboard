"use client";

import { lusitana } from "@/app/ui/fonts";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "@/app/ui/button";
import { useActionState } from "react";
import { authenticate } from "@/app/lib/actions";
import { useSearchParams } from "next/navigation";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <form
      action={formAction}
      className="space-y-6 w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto bg-gray-900/60 p-4 sm:p-8 rounded-2xl shadow-2xl border border-gray-800"
    >
      <div className="flex-1">
        <h1
          className={`${lusitana.className} mb-6 text-3xl font-bold text-white text-center`}
        >
          Inicia sesión
        </h1>
        <div className="w-full space-y-6">
          <div className="space-y-2">
            <label className="block text-gray-300 font-medium" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <input
                className="w-full rounded-md border border-gray-700 bg-gray-800 text-white px-4 py-4 pl-10 text-lg focus:outline-none focus:ring-2 focus:ring-lime-400 placeholder:text-gray-400"
                id="email"
                type="email"
                name="email"
                placeholder="Ingresa tu correo electrónico"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-lime-400" />
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="block text-gray-300 font-medium"
              htmlFor="password"
            >
              Contraseña
            </label>
            <div className="relative">
              <input
                className="w-full rounded-md border border-gray-700 bg-gray-800 text-white px-4 py-4 pl-10 text-lg focus:outline-none focus:ring-2 focus:ring-lime-400 placeholder:text-gray-400"
                id="password"
                type="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-lime-400" />
            </div>
          </div>
        </div>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <Button
          className="mt-6 w-fit bg-gray-800 border-gray-700 rounded-lg p-3 text-white font-semibold py-3  hover:bg-lime-300 transition-all duration-200 disabled:opacity-60 text-lg "
          aria-disabled={isPending}
        >
          Iniciar sesión <ArrowRightIcon className="ml-2 h-5 w-5 text-white" />
        </Button>
        <div
          className="flex h-8 items-end space-x-1 mt-2"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-400">{errorMessage}</p>
            </>
          )}
        </div>
        <div className="my-8 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-gray-700" />
          <span className="text-gray-400 text-sm">o continúa con</span>
          <span className="h-px w-16 bg-gray-700" />
        </div>
        <div className="flex flex-col gap-4">
          <button
            type="button"
            onClick={() => (window.location.href = "/api/auth/signin/google")}
            className="flex items-center justify-center gap-2 w-full bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-200 transition-all duration-200 border border-gray-300"
          >
            <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
              <g>
                <path
                  d="M44.5 20H24V28.5H36.5C35.1 32.6 31.1 35.5 26 35.5C19.7 35.5 14.5 30.3 14.5 24C14.5 17.7 19.7 12.5 26 12.5C28.7 12.5 31.1 13.5 33 15.1L38.1 10C34.7 6.9 30.6 5 26 5C15.5 5 7 13.5 7 24C7 34.5 15.5 43 26 43C36.5 43 45 34.5 45 24C45 22.7 44.8 21.3 44.5 20Z"
                  fill="#FFC107"
                />
                <path
                  d="M9.7 14.1L16.2 18.6C18 15.1 21.7 12.5 26 12.5C28.7 12.5 31.1 13.5 33 15.1L38.1 10C34.7 6.9 30.6 5 26 5C19.7 5 14.1 9.1 11.3 14.1H9.7Z"
                  fill="#FF3D00"
                />
                <path
                  d="M26 43C30.5 43 34.5 41.3 37.6 38.6L31.7 33.9C29.8 35.1 27.5 35.5 26 35.5C21.1 35.5 17.1 32.6 15.7 28.5H9.6V33.1C12.4 38.1 18.1 43 26 43Z"
                  fill="#4CAF50"
                />
                <path
                  d="M44.5 20H36.5V28.5H44.5C44.8 27.3 45 25.7 45 24C45 22.7 44.8 21.3 44.5 20Z"
                  fill="#1976D2"
                />
              </g>
            </svg>
            Google
          </button>
          <button
            type="button"
            onClick={() => (window.location.href = "/api/auth/signin/github")}
            className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white font-semibold py-3 rounded-md hover:bg-gray-800 transition-all duration-200 border border-gray-700"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.019.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </button>
          <button
            type="button"
            onClick={() => (window.location.href = "/api/auth/signin/linkedin")}
            className="flex items-center justify-center gap-2 w-full bg-[#0077b5] text-white font-semibold py-3 rounded-md hover:bg-[#005983] transition-all duration-200 border border-[#0077b5]"
          >
            <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
              <path d="M29 0H3C1.3 0 0 1.3 0 3v26c0 1.7 1.3 3 3 3h26c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zM9.4 27H5.3V12h4.1v15zm-2-17.1c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3zm19.6 17.1h-4.1v-7.2c0-1.7-.6-2.8-2.1-2.8-1.1 0-1.7.7-2 1.4-.1.3-.1.7-.1 1.1V27h-4.1s.1-13.7 0-15h4.1v2.1c.5-.8 1.4-2 3.5-2 2.6 0 4.5 1.7 4.5 5.3V27z" />
            </svg>
            LinkedIn
          </button>
        </div>
      </div>
    </form>
  );
}

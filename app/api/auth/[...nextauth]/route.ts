import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import LinkedInProvider from "next-auth/providers/linkedin";
import { authConfig } from "@/auth.config";
import { z } from "zod";
import type { User } from "@/app/lib/definitions";
import bcrypt from "bcrypt";
import postgres from "postgres";

// Conexión a la base de datos PostgreSQL con SSL requerido
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

// Función para buscar un usuario por email en la base de datos
async function getUser(email: string): Promise<User | undefined> {
  try {
    // Consulta SQL para obtener el usuario por email
    const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`;
    // Retorna el primer usuario encontrado (debería ser único)
    return user[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

// Configuración de NextAuth
const { handlers } = NextAuth({
  // Importa configuración adicional desde auth.config
  ...authConfig,

  // Configuración de proveedores de autenticación
  providers: [
    // Proveedor de credenciales (email/password)
    Credentials({
      // Función que autoriza las credenciales del usuario
      async authorize(credentials) {
        // Esquema de validación con Zod para verificar formato de credenciales
        const parsedCredentials = z
          .object({
            email: z.string().email(), // Email válido requerido
            password: z.string().min(6), // Password mínimo 6 caracteres
          })
          .safeParse(credentials); // Validación segura (no lanza errores)

        // Si las credenciales tienen el formato correcto
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email); // Busca usuario en BD

          // Si no se encuentra el usuario, retorna null (falla autenticación)
          if (!user) return null;

          // Verificación del password con bcrypt
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (!passwordsMatch) return null;

          // Retorna el usuario autenticado
          return user;
        }

        // Retorna null si las credenciales no son válidas o falla la autenticación
        return null;
      },
    }),
    // Google - Comentado hasta que se configuren las credenciales
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),
    // GitHub - Solo habilitado si las credenciales están disponibles
    ...(process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET ? [
      GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      })
    ] : []),
    // LinkedIn - Comentado hasta que se configuren las credenciales
    // LinkedInProvider({
    //   clientId: process.env.LINKEDIN_CLIENT_ID!,
    //   clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
    // }),
  ],
});

export const { GET, POST } = handlers;

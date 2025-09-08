import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Rutas que requieren autenticación
const protectedRoutes = ["/crear-anuncio", "/perfil"];

// Rutas solo para usuarios no autenticados
const authRoutes = ["/iniciar-sesion", "/registro-usuario"];

// Rutas públicas que pueden acceder tanto autenticados como no autenticados
const publicRoutes = ["/", "/anuncios", "/mis-anuncios"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Obtener token de las cookies (aquí usamos un token simple, en producción usarías JWT)
  const token = request.cookies.get("auth-token")?.value;
  const isAuthenticated = !!token;

  // Verificar si la ruta actual es protegida
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // Verificar si la ruta actual es solo para no autenticados
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  // Si intenta acceder a una ruta protegida sin estar autenticado
  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL("/iniciar-sesion", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Si intenta acceder a rutas de auth estando ya autenticado
  if (isAuthRoute && isAuthenticated) {
    const redirectPath = request.nextUrl.searchParams.get("redirect") || "/";
    return NextResponse.redirect(new URL(redirectPath, request.url));
  }

  // Agregar headers para indicar el estado de autenticación
  const response = NextResponse.next();
  response.headers.set("x-user-authenticated", isAuthenticated.toString());

  return response;
}

// Configurar en qué rutas se ejecuta el middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

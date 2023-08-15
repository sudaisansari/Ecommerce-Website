import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/","/products","/category/male","/category/female","/category/kids","/success"]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
};
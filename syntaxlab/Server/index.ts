
import {publicProcedure, router} from "./trpc";

export const appRouter = router({
   pokemon:publicProcedure.query(() => 'hello trpc v10!'),
});

export type AppRouter = typeof appRouter;
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  routeKey?: string;
}

export default function PageWrapper({ children, routeKey }: PageWrapperProps) {
  // Ensure key is never null (handle usePathname possibly returning null)
  const safeKey: string | undefined = routeKey ?? undefined;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={safeKey}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ minHeight: "100vh" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
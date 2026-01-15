"use client";

import { ReactNode } from "react";
import { PageTransitionProvider } from "./PageTransition";

// =============================================================================
// CLIENT PROVIDERS WRAPPER
// =============================================================================
// This wraps all client-side providers for the app.
// 
// TO REMOVE PAGE TRANSITION:
// 1. Remove the PageTransitionProvider import and wrapper from this file
// 2. Delete PageTransition.tsx
// =============================================================================

interface ProvidersProps {
    children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
    return (
        <PageTransitionProvider>
            {children}
        </PageTransitionProvider>
    );
};
